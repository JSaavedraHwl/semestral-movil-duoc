export interface Menu {
    items: MenuItem[];
}

export interface MenuItem {
    name: string;
    url: string | null;
    subMenu?: MenuItem[] 
}
