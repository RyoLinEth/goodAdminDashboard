export const MenuList = [
    //Dashboard
    {
        title: 'Dashboard',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">grid_view</i>,
        to: 'dashboard'
        // content: [

        //     {
        //         title: 'Dashboard Light',
        //         to: 'dashboard',					
        //     },
        //     // {
        //     //     title: 'Dashboard Dark',
        //     //     to: 'dashboard-dark',
        //     // },
        //     // {
        //     //     title: 'Dashboard-2',
        //     //     to: 'index-1',
        //     // },
        //     // {
        //     //     title: 'Dashboard-3',
        //     //     to: 'index-3',


        //     // },
        //     // {
        //     //     title: 'Dashboard-4',
        //     //     to: 'index-4',

        //     // },
        // 	// {
        //     //     title: 'Dashboard-5',
        //     //     to: 'index-5',

        //     // },


        // ],
    },
    //Token
    {
        title: 'Token',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">currency_exchange</i>,
        content: [
            {
                title: 'Create Token',
                to: 'create-token',
            },
            {
                title: 'Create NFT Token',
                to: 'under-construction',
            },
            {
                title: 'My Token List',
                to: 'token-list',
            },
            {
                title: 'Control Panel',
                to: 'control-panel',
            },
            {
                title: 'Lock Token',
                to: 'control-panel',
            },
            {
                title: 'MultiSend Token',
                to: 'control-panel',
            },
        ]
    },
    //Token
    {
        title: 'Fund Raising',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">generating_tokens</i>,
        content: [
            {
                title: 'Create Presale',
                to: 'create-token',
            },
            {
                title: 'Create IDO',
                to: 'token-list',
            },
        ]
    },
    {
        title: 'Launchpads',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">rocket_launch</i>,
        content: [
            {
                title: 'Presale List',
                to: 'create-token',
            },
            {
                title: 'IDO List',
                to: 'token-list',
            },
        ]
    },
    {
        title: 'Social',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">emoji_people</i>,
        content: [
            {
                title: 'Send Message',
                to: 'create-token',
            },
            {
                title: 'My Message Box',
                to: 'token-list',
            },
        ]
    },
    {
        title: 'Visualize',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">remove_red_eye</i>,
        content: [
            {
                title: 'Send Token',
                to: 'create-token',
            },
            {
                title: 'Make a Gift Box',
                to: 'token-list',
            },
            {
                title: 'Watch My Gift Boxes',
                to: 'token-list',
            },
        ]
    },
    {
        title: 'Trading',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">trending_up</i>,
        content: [
            {
                title: 'Market',
                to: 'market',
            },
            {
                title: 'ICO Listing',
                to: 'ico-listing',
            },
            {
                title: 'P2P',
                to: 'p2p',
            },
            {
                title: 'Future',
                to: 'future',
            },
            {
                title: 'Intraday Trading',
                to: 'intraday-trading',
            },
        ]
    },
    //Crypto
    {
        title: 'Crypto',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">currency_bitcoin</i>,
        content: [
            {
                title: 'Market Watch',
                to: 'crypto',
            },
            {
                title: 'ICO Listing Filter',
                to: 'ico-listing-filter',
            },
            {
                title: 'Coin Details',
                to: 'coin-details',
            },
            {
                title: 'Exchange',
                to: 'exchange',
            },
            {
                title: 'Banking',
                to: 'banking',
            },
        ]
    },
    //Reports
    {
        title: 'Reports',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">description</i>,
        content: [
            {
                title: 'History',
                to: 'history'
            },
            {
                title: 'Orders',
                to: 'orders'
            },
            {
                title: 'Report',
                to: 'reports'
            },
            {
                title: 'User',
                to: 'user'
            },
            {
                title: 'Contacts',
                to: 'contact'
            },
            {
                title: 'Activity',
                to: 'activity'
            },
        ],
    },

    //Apps
    {
        title: 'Apps',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons"> app_registration </i>,
        content: [
            {
                title: 'Profile',
                to: 'app-profile'
            },
            {
                title: 'Edit Profile',
                to: 'edit-profile'
            },
            {
                title: 'Post Details',
                to: 'post-details'
            },
            {
                title: 'Email',
                //to: './',
                hasMenu: true,
                content: [
                    {
                        title: 'Compose',
                        to: 'email-compose',
                    },
                    {
                        title: 'Index',
                        to: 'email-inbox',
                    },
                    {
                        title: 'Read',
                        to: 'email-read',
                    }
                ],
            },
            {
                title: 'Calendar',
                to: 'app-calender'
            },
            {
                title: 'Shop',
                //to: './',
                hasMenu: true,
                content: [
                    {
                        title: 'Product Grid',
                        to: 'ecom-product-grid',
                    },
                    {
                        title: 'Product List',
                        to: 'ecom-product-list',
                    },
                    {
                        title: 'Product Details',
                        to: 'ecom-product-detail',
                    },
                    {
                        title: 'Order',
                        to: 'ecom-product-order',
                    },
                    {
                        title: 'Checkout',
                        to: 'ecom-checkout',
                    },
                    {
                        title: 'Invoice',
                        to: 'ecom-invoice',
                    },
                    {
                        title: 'Customers',
                        to: 'ecom-customers',
                    },
                ],
            },
        ],
    },
    //Charts
    {
        title: 'Charts',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons"> assessment </i>,
        content: [

            {
                title: 'RechartJs',
                to: 'chart-rechart',
            },
            {
                title: 'Chartjs',
                to: 'chart-chartjs',
            },
            {
                title: 'Sparkline',
                to: 'chart-sparkline',
            },
            {
                title: 'Apexchart',
                to: 'chart-apexchart',
            },
        ]
    },
    //Boosttrap
    {
        title: 'Bootstrap',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons"> favorite </i>,
        content: [
            {
                title: 'Accordion',
                to: 'ui-accordion',
            },
            {
                title: 'Alert',
                to: 'ui-alert',
            },
            {
                title: 'Badge',
                to: 'ui-badge',
            },
            {
                title: 'Button',
                to: 'ui-button',
            },
            {
                title: 'Modal',
                to: 'ui-modal',
            },
            {
                title: 'Button Group',
                to: 'ui-button-group',
            },
            {
                title: 'List Group',
                to: 'ui-list-group',
            },
            {
                title: 'Cards',
                to: 'ui-card',
            },
            {
                title: 'Carousel',
                to: 'ui-carousel',
            },
            {
                title: 'Dropdown',
                to: 'ui-dropdown',
            },
            {
                title: 'Popover',
                to: 'ui-popover',
            },
            {
                title: 'Progressbar',
                to: 'ui-progressbar',
            },
            {
                title: 'Tab',
                to: 'ui-tab',
            },
            {
                title: 'Typography',
                to: 'ui-typography',
            },
            {
                title: 'Pagination',
                to: 'ui-pagination',
            },
            {
                title: 'Grid',
                to: 'ui-grid',
            },
        ]
    },
    //plugins
    {
        title: 'Plugins',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons"> extension </i>,
        content: [
            {
                title: 'Select 2',
                to: 'uc-select2',
            },
            // {
            //     title:'Noui Slider',
            //     to: 'uc-noui-slider',
            // },
            {
                title: 'Sweet Alert',
                to: 'uc-sweetalert',
            },
            {
                title: 'Toastr',
                to: 'uc-toastr',
            },
            {
                title: 'Jqv Map',
                to: 'map-jqvmap',
            },
            {
                title: 'Light Gallery',
                to: 'uc-lightgallery',
            },
        ]
    },
    //Widget
    {
        title: 'Widget',
        //classsChange: 'mm-collapse',
        iconStyle: <i className="bi bi-gear-wide"></i>,
        to: 'widget-basic',
    },
    //Forms
    {
        title: 'Forms',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons"> insert_drive_file </i>,
        content: [
            {
                title: 'Form Elements',
                to: 'form-element',
            },
            {
                title: 'Wizard',
                to: 'form-wizard',
            },
            {
                title: 'CkEditor',
                to: 'form-ckeditor',
            },
            {
                title: 'Pickers',
                to: 'form-pickers',
            },
            {
                title: 'Form Validate',
                to: 'form-validation',
            },

        ]
    },
    //Table
    {
        title: 'Table',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons"> table_chart </i>,
        content: [
            {
                title: 'Table Filtering',
                to: 'table-filtering',
            },
            {
                title: 'Table Sorting',
                to: 'table-sorting',
            },
            {
                title: 'Bootstrap',
                to: 'table-bootstrap-basic',
            },


        ]
    },
    //Pages
    {
        title: 'Pages',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">article</i>,
        content: [
            {
                title: 'Error',
                hasMenu: true,
                content: [
                    {
                        title: 'Error 400',
                        to: 'page-error-400',
                    },
                    {
                        title: 'Error 403',
                        to: 'page-error-403',
                    },
                    {
                        title: 'Error 404',
                        to: 'page-error-404',
                    },
                    {
                        title: 'Error 500',
                        to: 'page-error-500',
                    },
                    {
                        title: 'Error 503',
                        to: 'page-error-503',
                    },
                ],
            },
            {
                title: 'Lock Screen',
                to: 'page-lock-screen',
            },

        ]
    },

]