import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class Telemetry {
    constructor() {
        this.navigationButtons = new Map();
        this.tlmContainer = document.getElementById("tlm-container");
        this.navContainer = document.getElementById("tlm-navigation-container");
        this.selectedTitle = document.getElementById("tlm-content-title");
        this.selectedRole = document.getElementById("tlm-content-role");
        this.selectedTools = document.getElementById("tlm-content-tools");
        this.selectedBody = document.getElementById("tlm-content-body");
        this.contentParent = document.getElementById("content-parent");
        this.swiperWrapper = document.getElementById("swiper-wrapper")
        this.swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                addIcons: false,
            },
        });

        document.getElementById("exit-tlm-button").addEventListener("click", (evt) => {
            evt.target.blur();
            console.log("Clicked!");
            this.tlmContainer.classList.toggle("hidden");
        });

        const urls = import.meta.glob('/src/photos/*/*.{jpg,jpeg,png,JPEG,gif}', {query: '?url', import: 'default', eager: true});
        this.images = {};
        for (const path in urls) {
            const parts = path.split('/');
            const folder = parts[3];
            if (!this.images[folder]) this.images[folder] = [];
            this.images[folder].push(urls[path]);
        }
    }

    buildNavigation(rootObj = null) {
        if (rootObj == null) { return; }

        /**
         * We are basically making a tree-like navigation bar starting from the top level
         * But I know the depth will be 3 so I will just do two loops
         * rootObj should be an OrbitingObject
         */
        const root = this.createNavigationBranch(rootObj.info);
        root[0].style.overflowX = 'hidden';
        root[0].style.overflowY = 'auto';
        root[0].style.scrollbarWidth = 'auto';
        root[0].style.scrollbarColor = "#c9ffd1 rgba(0,0,0,0)";
        this.navContainer.appendChild(root[0]);
        

        // Iterate over all the children and create a branch for them (planets)
        rootObj.info.children.forEach(child => {
            // Create the branch for the planet
            const branch = this.createNavigationBranch(child.info);

            // Add a button for each moon
            child.info.children.forEach(c => {
                const leafBtn = document.createElement('button');
                leafBtn.textContent = c.info.tabLabel;
                leafBtn.classList.add("observed-item", "baseText");
                leafBtn.style.width = 'fit-content';
                leafBtn.addEventListener("click", () => {
                    this.populateContent(c.info);
                });
                this.navigationButtons.set(c.info.tabLabel, leafBtn);
                branch[1].appendChild(leafBtn);
            });

            root[1].appendChild(branch[0]);
        });
    }

    createNavigationBranch(info) {
        // container for the whole branch
        const container = document.createElement('div'); 
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.height = 'fit-content';
        // container.style.width = 'fit-content';
        container.style.boxSizing = 'border-box';
        container.style.marginTop = '10px';

        // button that heads the branch (opens and closes it)
        const button = document.createElement('button'); 
        button.classList.add("observed-item", "baseText");
        button.textContent = info.tabLabel;
        button.style.width = 'fit-content';
        button.addEventListener('click', () => {
            this.populateContent(info)
        })
        this.navigationButtons.set(info.tabLabel, button);
        
        // The container that will be resized when the children need to be shown
        const branchBody = document.createElement('div'); 
        branchBody.classList.add("branch-body");
        // if (hideChildren) {
        //     branchBody.style.height = '0px';
        //     container.addEventListener('mouseenter', () => {
        //         branchBody.style.height = 'fit-content';
        //     });
        //     container.addEventListener('mouseleave', () => {
        //         branchBody.style.height = '0px';
        //     });
        // } else {
        //     branchBody.style.height = 'fit-content';
        // }


        // These will size based on the parent
        const bar = document.createElement('div');
        bar.style.width = '2px';
        bar.style.height = '100%';
        bar.style.backgroundColor = '#c9ffd1';
        const childrenContainer = document.createElement('div');
        // childrenContainer.style.width = 'fit-content';
        childrenContainer.style.height = '100%';
        childrenContainer.style.display = 'flex';
        childrenContainer.style.flexDirection = 'column';
        childrenContainer.style.paddingLeft = '15px';
        childrenContainer.style.boxSizing = 'border-box';

        branchBody.appendChild(bar);
        branchBody.appendChild(childrenContainer);

        container.appendChild(button);
        container.appendChild(branchBody);

        // Provide the entire object as well as the div that will contain the children
        return [container, childrenContainer]
    }

    populateContent(info) {
        this.selectedTitle.textContent = info.header;
        this.selectedBody.innerHTML = info.body;

        let prefix = "";
        if (info.role != "") {
            prefix = "Role: ";
        }
        this.selectedRole.textContent = prefix + info.role;

        prefix = "";
        if (info.tools != "") {
            prefix = "Tools: "
        }
        this.selectedTools.textContent = prefix + info.tools;

        if (info.galleryName == "") {
            this.contentParent.style.gridTemplateColumns = '1fr 0fr';
        } else {
            this.contentParent.style.gridTemplateColumns = '1fr 1fr';
            this.setPhotos(info.galleryName);
        }
    }

    setContent(objInfo) {
        this.navigationButtons.get(objInfo.tabLabel).focus();
        this.populateContent(objInfo);
    }

    setPhotos(galleryName) {
        this.swiperWrapper.innerHTML = "";
        for (const idx in this.images[galleryName]) {
            const div = document.createElement('div');
            div.classList.add("swiper-slide");
            const img = document.createElement('img');
            img.src = this.images[galleryName][idx];
            img.classList.add("swiper-image");
            div.append(img);
            this.swiperWrapper.append(div);
        }
        this.swiper.update();
        this.swiper.pagination.update();
        this.swiper.slideTo(0, 0);
    }
}