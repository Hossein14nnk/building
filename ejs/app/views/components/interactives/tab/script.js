class Tab {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.tab-list').forEach(tabList => {
            this.setupTab(tabList);
        });
    }

    setupTab(tabList) {
        const items = tabList.querySelectorAll('.tab-item');

        items.forEach(item => {
            item.addEventListener('click', () => {
                this.activate(tabList, item);
            });
        });
    }

    activate(tabList, activeItem) {
        const value = activeItem.dataset.tab;

        // Activate tab item
        tabList.querySelectorAll('.tab-item').forEach(item => {
            const isActive = item === activeItem;

            item.classList.toggle('active', isActive);
            item.setAttribute(
                'aria-selected',
                isActive ? 'true' : 'false'
            );
        });

        // Find the closest parent that contains both
        // the tab list and its content
        const tab = tabList.parentElement;

        if (!tab) return;

        // Activate tab content
        tab.querySelectorAll('[data-tab-content]').forEach(content => {
            const isActive = content.dataset.tabContent === value;

            content.classList.toggle('active', isActive);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Tab();
});