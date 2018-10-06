export const MenuBarObj: any = {
  menu: [
    {
      id: '1',
      name: 'پیشخوان',
      icon: 'dashboard',
      link: 'dashboard',
      accessCondition: [{role: '', groupId: []}],
      tooltip: 'پیشخوان',
      children: []
    },
    {
      id: '2',
      name: 'مدیریت کاربران',
      icon: 'supervised_user_circle',
      link: '',
      accessCondition: [{role: 'admin', groupId: ['1']}],
      tooltip: 'مدیریت کاربران',
      children: [
        {name: ' کاربران', icon: 'playlist_add_check', id: '2-1', link: 'user/users', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1']}]},
        {name: 'گروه ها', icon: 'filter_list', id: '2-2', link: 'user/groups', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1']}]}
      ]
    },
    {
      id: '3',
      name: 'مرکز تماس',
      icon: 'contact_phone',
      link: '',
      accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}, {role: 'supervisor', groupId: ['256', '512', '1024', '2048', '4096']}, {role: 'operator', groupId: ['256', '512', '1024', '2048', '4096']}],
      tooltip: 'مرکز تماس',
      children: [
        {name: ' گروه های داخلی', icon: 'call', id: '3-1', link: 'call/internalGroupsManagement', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}]},
        {name: 'بارگذاری فایل های تماس', icon: 'call', id: '3-2', link: 'call/callManagementUploadedFile', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}]},
        {name: 'برنامه ریزی تماس ', icon: 'call', id: '3-3', link: 'call/periodic', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}]},
        {name: 'تماس های گرفته شده', icon: 'call', id: '3-4', link: 'call/callList', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1']}, {role: 'operator', groupId: ['256', '512', '1024', '2048', '4096']}]},
        {name: 'فرم تماس خروجی', icon: 'call', id: '3-5', link: 'call/callForm', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1']}, {role: 'operator', groupId: ['256', '512', '1024', '2048', '4096']}]},
        {name: 'مدیریت تماس های گرفته شده', icon: 'call', id: '3-6', link: 'call/callListManagement', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}, {role: 'supervisor', groupId: ['256', '512', '1024', '2048', '4096']}]},
      ]
    },
    {
      id: '4',
      name: 'لجستیک',
      icon: 'place',
      link: '',
      accessCondition: [{role: 'admin', groupId: ['1']}],
      tooltip: 'لجستیک',
      children: [
        {name: 'بارگذاری فایل های لجستیک', icon: 'call', id: '4-1', link: 'call/logisticUploadFile', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1']}]},
      ]
    },
    {
      id: '5',
      name: 'گزارشات',
      icon: 'description',
      link: '',
      accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}, {role: 'supervisor', groupId: ['256', '512', '1024', '2048', '4096']}, {role: 'operator', groupId: ['256', '512', '1024', '2048', '4096']}],
      tooltip: 'گزارشات',
      children: []
    },
    {
      id: '6',
      name: 'سیستم',
      icon: 'settings_applications',
      link: '',
      accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}],
      tooltip: 'سیستم',
      children: [
        {name: 'انواع گروه ها', icon: 'filter_list', id: '6-1', link: 'user/groupTypes', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1']}]},
        {name: 'مدیریت سامانه ها', icon: 'call', id: '6-2', link: 'user/systemManagement', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1']}]},
        {name: 'انواع پروژه ها', icon: 'call', id: '6-3', link: 'call/callGroupType', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}]},
        {name: 'مدیریت پروژه ها', icon: 'call', id: '6-4', link: 'call/callProjectManagement', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}], children: [
            {name: 'انواع گروه ها1', icon: 'filter_list', id: '6-4-1', link: 'user/groupTypes', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1']}]},
            {name: 'مدیریت سامانه ها1', icon: 'call', id: '6-4-2', link: 'user/systemManagement', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1']}]},
            {name: 'انواع پروژه ها1', icon: 'call', id: '6-4-3', link: 'call/callGroupType', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}]},
            {name: 'مدیریت پروژه ها1', icon: 'call', id: '6-4-4', link: 'call/callProjectManagement', tooltip: '', accessCondition: [{role: 'admin', groupId: ['1', '256', '512', '1024', '2048', '4096']}]},
          ]},
      ]
    },
    {
      id: '7',
      name: 'پروفایل',
      icon: '',
      link: 'profile',
      accessCondition: [{role: 'admin', groupId: ['1']}],
      tooltip: '',
      children: [],
      invisible: true
    },
  ],

  profileMenu: [
    {
      id: '1',
      name: 'پیشخوان',
      icon: 'dashboard',
      link: 'dashboard',
      uncheck: true,
      tooltip: '',
      children: []
    },
    {
      id: '2',
      name: 'مشخصات فردی و تماس',
      icon: 'account_box',
      link: 'personal-info',
      tooltip: '',
      children: [],
      subMenu: 'profile'
    },
    {
      id: '3',
      name: 'ورود و امنیت',
      icon: 'security',
      link: 'login-security',
      tooltip: '',
      children: [],
      subMenu: 'profile'
    },
    {
      id: '4',
      name: 'تنظیمات',
      icon: 'settings_applications',
      link: 'setting',
      tooltip: '',
      children: [],
      subMenu: 'profile'
    },
    {
      id: '5',
      name: 'مدارک',
      icon: 'description',
      link: 'document',
      tooltip: '',
      children: [],
      subMenu: 'profile'
    },
    {
      id: '6',
      name: 'وسیله نقلیه',
      icon: 'directions_car',
      link: 'vehicle',
      tooltip: '',
      children: [],
      subMenu: 'profile'
    }
  ]
}
