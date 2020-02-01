export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  onlyAdmin?: any;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

export const appNavigation: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'library',
        title: 'Library',
        type: 'item',
        url: '/library',
        icon: 'icon-home'
      },
      {
        id: 'liked',
        title: 'Liked',
        type: 'item',
        url: '/library/liked',
        icon: 'icon-heart'
      },
      {
        id: 'favorite',
        title: 'Favorites',
        type: 'item',
        url: '/library/favorite',
        icon: 'icon-star'
      },
      {
        id: 'lists',
        title: '',
        type: 'group',
        icon: 'icon-group',
        children: [
          {
            id: 'settings',
            title: 'Playlists',
            type: 'collapse',
            icon: 'feather icon-list',
            onlyAdmin: true,
            children: [
              {
                id: 'new-list',
                title: 'Add New',
                type: 'item',
                url: '/playlist'
              },
              {
                id: 'list1',
                title: 'Hip Hop',
                type: 'item',
                url: '/playlist'
              },
              {
                id: 'list2',
                title: 'Long Drive',
                type: 'item',
                url: '/playlist'
              }
            ]
          }
        ]
      }
    ]
  }
];
