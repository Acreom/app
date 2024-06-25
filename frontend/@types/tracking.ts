export enum TrackingType {
    ACTIVE = 'Active',
    AGENDA = 'Agenda',
    AUTH = 'Auth',
    ALL_PAGES = 'All Pages',
    ARCHIVE = 'Archive',
    ASSISTANT = 'Assistant',
    CALENDAR = 'Calendar',
    CUSTOM_VIEW = 'Custom View',
    EDITOR = 'Editor',
    ENCRYPTION = 'Encryption',
    FOLDER = 'Folder',
    FULL_SEARCH = 'Full Search',
    GITHUB = 'Github',
    HISTORY = 'History',
    IMPORT = 'Import',
    INFO_PANEL = 'Info Panel',
    JIRA = 'Jira',
    LINEAR = 'Linear',
    MERMAID = 'Mermaid',
    MY_DAY = 'My Day',
    NAVIGATION = 'Navigation',
    NEW_TAB = 'New Tab',
    ONBOARDING = 'Onboarding',
    PAGE = 'Page',
    QUICK_CAPTURE = 'Quick Capture',
    SESSION = 'Session',
    SETTINGS = 'Settings',
    SHARING = 'Sharing',
    SIDEBAR = 'Sidebar',
    TABS = 'Tabs',
    TASK = 'Task',
    TEMPLATE = 'Template',
    TIMELINE = 'Timeline',
    VAULT = 'Vault',
    VERSION_HISTORY = 'Version History',
    SIDEBAR_BUTTON = 'Sidebar Button',
    SIDEBAR_RIGHT_CLICK = 'Sidebar Right Click',
    SIDEBAR_FOOTER_RIGHT_CLICK = 'Sidebar Folder Right Click',
    DUPLICATE = 'Duplicate',
    GITHUB_TAB_CLIP = 'Github Tab Clip',
    GITHUB_MODAL_CLIP = 'Github Modal Clip',
    JIRA_CLIP_TAB = 'Jira Clip Tab',
    JIRA_CLIP_MODAL = 'Jira Clip Modal',
    EVENT_CLIP_DROPDOWN = 'Event Clip Dropdown',
    EVENT_CLIP_MODAL = 'Event Clip Modal',
    PAGE_DETAIL = 'Page Detail',
    PROJECT = 'Project',
}

export enum TrackingAction {
    ACCEPT_PRO_MODAL = 'Accept Pro Modal',
    ACREOM_CLOUD = 'acreom Cloud',
    ADD_API_KEY = 'Add API Key',
    ADD_CALENDAR = 'Add Calendar',
    ADD_CLIP = 'Add Clip',
    ADD_COMMENT = 'Add Comment',
    ADD_FILTER = 'Add Filter',
    ADD_TASK = 'Add Task',
    ARCHIVE = 'Archive',
    BACK = 'Back',
    BLUR = 'Blur',
    CANCEL_EDIT_MODE = 'Cancel Edit Mode',
    CAPTURE_MY_DAY = 'Capture My Day',
    CAPTURE_PAGE = 'Capture Page',
    CHANGE_TYPE = 'Change Type',
    CLEAR_EMOJI = 'Clear Emoji',
    CLEAR_FILTER = 'Clear Filter',
    CLEAR_DATE = 'Clear Date',
    CLEAR_TIME = 'Clear Time',
    CLICK_LABEL = 'Click Label',
    CLICK_LOCATION = 'Click Location',
    CLICK_OUTLINE_ITEM = 'Click Outline Item',
    CLOSE = 'Close',
    CLOSE_DIALOG = 'Close Dialog',
    CLOSE_TIMELINE = 'Close Timeline',
    COLLAPSE_STATUS = 'Collapse Status',
    COMPLETE = 'Complete',
    COPY_COMMENT_TEXT = 'Copy Comment Text',
    COPY_LINK = 'Copy Link',
    COPY_PULL_REQUEST_BRANCH_NAME = 'Copy Pull Request Branch Name',
    CREATE = 'Create',
    CREATE_VAULT = 'Create Vault',
    CREATE_VIEW = 'Create View',
    DELETE = 'Delete',
    DELETE_LABEL = 'Delete Label',
    DELETE_VIEW = 'Delete View',
    DISABLE = 'Disable',
    DISABLE_HAS_TASKS = 'Disable Has Tasks',
    DISABLE_LOCAL_SYNC = 'Disable Local Sync',
    DISABLE_QUICK_CAPTURE = 'Disable Quick Capture',
    DISMISS_NOTIFICATIONS = 'Dismiss Notifications',
    END = 'End',
    ENABLE = 'Enable',
    ENABLE_CLOUD = 'Enable Cloud',
    ENABLE_LOCAL_SYNC = 'Enable Local Sync',
    ENABLE_HAS_TASKS = 'Enable Has Tasks',
    ENABLE_QUICK_CAPTURE = 'Enable Quick Capture',
    ENCRYPTION_START = 'End-to-end Encryption Start',
    ENCRYPTION_COMPLETE = 'End-to-end Encryption Complete',
    EXPAND = 'Expand',
    EXPAND_STATUS = 'Expand Status',
    EXPORT_MARKDOWN = 'Export Markdown',
    EXPORT_SHORTCUTS = 'Export Shortcuts',
    FILTER_BY_ASSIGNEE = 'Filter By Assignee',
    FILTER_BY_FOLDER = 'Filter by Folder',
    FILTER_BY_LABEL = 'Filter by Label',
    FOCUS = 'Focus',
    FOCUS_AGENDA = 'Focus Agenda',
    FORWARD = 'Forward',
    GENERATE_MERMAID = 'Generate Mermaid',
    GENERATE_RECOVERY_KEY = 'Generate Recovery Key',
    GROUP_BY_FOLDER = 'Group by Folder',
    GROUP_BY_NONE = 'Group by None',
    GROUP_BY_STATUS = 'Group by Status',
    HELP_MENU_ACTION = 'Help Menu Action',
    COLLAPSE = 'Collapse',
    HIDE_CALENDAR = 'Hide Calendar',
    HIDE_COMPLETED_TASKS = 'Hide Completed Tasks',
    HIDE_COMPLETED_TASKS_IN_AGENDA = 'Hide Completed Tasks In Agenda',
    HIDE_DISPLAY_PROPERTY = 'Hide Display Property',
    HIDE_PAGES = 'Hide Pages',
    HIDE_PAGES_IN_SIDEBAR = 'Hide Pages In Sidebar',
    HIDE_TASKS = 'Hide Tasks',
    INTEGRATION_RELOAD = 'Integration Reload',
    INTEGRATIONS = 'Integrations',
    CHANGE_ASSIGNEE = 'Change Assignee',
    CHANGE_COLOR = 'Change Color',
    CHANGE_DAY = 'Change Day',
    CHANGE_DISPLAY_PROPERTIES = 'Change Display Properties',
    CHANGE_KEYBIND = 'Change Keybind',
    CHANGE_LABELS = 'Change Labels',
    CHANGE_ORDER = 'Change Order',
    CHANGE_PRIORITY = 'Change Priority',
    CHANGE_SORT_BY = 'Change Sort By',
    CHANGE_SOURCE_TO_MY_DAY = 'Change Source to My Day',
    CHANGE_SOURCE_TO_VAULT = 'Change Source to Vault',
    CHANGE_STATUS = 'Change Status',
    CHANGE_SUB_CATEGORY = 'Change Sub-Category',
    CHANGE_THEME = 'Change Theme',
    COPY_LINK_PAGE = 'Copy Link Page',
    COPY_LINK_FOLDER = 'Copy Link Folder',
    IMPORT_SHORTCUTS = 'Import Shortcuts',
    INTEGRATIONS_ENABLE_CLOUD = 'Integrations Enable Cloud',
    INTEGRATIONS_PAGE_CONTINUE = 'Integrations Page Continue',
    INSERT_CODE_BLOCK = 'Insert Code Block',
    INSERT_EQUATION = 'Insert Equation',
    INSERT_GITHUB_LINK = 'Insert Github Link',
    INSERT_IMAGE = 'Insert Image',
    INSERT_JIRA_ISSUE = 'Insert Jira Issue',
    INSERT_MERMAID = 'Insert Mermaid',
    INSERT_PAGE_LINK = 'Insert Page Link',
    INSERT_TABLE = 'Insert Table',
    INSERT_TASK = 'Insert Task',
    INSERT_TEMPLATE = 'Insert Template',
    KEEP_LOCAL = 'Keep Local',
    LOGIN = 'Login',
    LOG_OUT = 'Log Out',
    MERGE_LABELS = 'Merge Labels',
    MOVE_TO = 'Move To',
    NEXT_DAY = 'Next Day',
    NEW_VAULT = 'New Vault',
    ONBOARDING_BACK = 'Onboarding Back',
    OPEN = 'Open',
    OPEN_COMMENT_ON_GITHUB = 'Open Comment on Github',
    OPEN_DATE_PICKER = 'Open Date Picker',
    OPEN_DIALOG = 'Open Dialog',
    OPEN_DROPDOWN = 'Open Dropdown',
    OPEN_EDIT_MODE = 'Open Edit Mode',
    OPEN_ENTITY = 'Open Entity',
    OPEN_EXISTING_VAULT = 'Open Existing Vault',
    OPEN_FULL_SEARCH = 'Open Full Search',
    OPEN_GITHUB_ISSUE_DETAIL = 'Open Github Issue Detail',
    OPEN_GITHUB_ISSUE_IN_BROWSER = 'Open Github Issue In Browser',
    OPEN_GITHUB_PULL_REQUEST_IN_BROWSER = 'Open Github Pull Request In Browser',
    OPEN_GITHUB_PULL_REQUEST_DETAIL = 'Open Github Pull Request Detail',
    OPEN_HELP_MENU = 'Open Help Menu',
    OPEN_IN_BROWSER = 'Open In Browser',
    OPEN_IN_NEW_TAB = 'Open In New Tab',
    OPEN_JIRA_ISSUE_DETAIL = 'Open Jira Issue Detail',
    OPEN_JIRA_ISSUE_IN_BROWSER = 'Open Jira Issue In Browser',
    OPEN_LINEAR_ISSUE = 'Open Linear Issue Detail',
    OPEN_OVERDUE = 'Open Overdue',
    OPEN_REPOSITORY_IN_BROWSER = 'Open Repository In Browser',
    OPEN_SEARCH = 'Open Search',
    OPEN_TIMELINE = 'Open Timeline',
    OPEN_VAULT_CHANGE_MODAL = 'Open Vault Change Modal',
    PIN = 'Pin',
    PREVIOUS_DAY = 'Previous Day',
    SPLIT = 'Split',
    QUERY = 'Query',
    REORDER_SIDEBAR_BENTO_ITEMS = 'Reorder Sidebar Bento Items',
    REORDER_STATUSES = 'Reorder Statuses',
    REMOVE_API_KEY = 'Remove API Key',
    REMOVE_CALENDAR = 'Remove Calendar',
    REMOVE_CLIP = 'Remove Clip',
    REMOVE_DATE = 'Remove Date',
    REMOVE_VAULT = 'Remove Vault',
    RENAME = 'Rename',
    RENAME_LABEL = 'Rename Label',
    REPLACE_CLIP = 'Replace Clip',
    RESIZE = 'Resize',
    RESTORE = 'Restore',
    RESTORE_DEFAULT_SHORTCUTS = 'Restore Default Shortcuts',
    RESTORE_FROM_ARCHIVE = 'Restore From Archive',
    SAVE = 'Save',
    SAVE_INTEGRATION = 'Save Integration',
    SAVE_RECOVERY_KEY = 'Save Recovery Key',
    SELECT_ALL_CALENDARS = 'Select All Calendars',
    SELECT_INTEGRATION = 'Select Integration',
    SELECT_MY_DAY = 'Select My Day',
    SELECT_MY_DAY_TEMPLATE = 'Select My Day Template',
    SELECT_PAGE = 'Select Page',
    SELECT_PROJECTS = 'Select Projects',
    SELECT_VIEW = 'Select View',
    SET_CONTENT_WIDTH = 'Set Content Width',
    SET_DATE = 'Set Date',
    SET_NEXT_WEEK = 'Set Next Week',
    SET_RECURRENCE = 'Set Recurrence',
    SET_STATUS = 'Set Status',
    SET_TIME = 'Set Time',
    SET_TODAY = 'Set Today',
    SET_TOMORROW = 'Set Tomorrow',
    SORT_BY_ASSIGNEE = 'Sort By Assignee',
    SORT_BY_CREATED_AT = 'Sort By Created At',
    SORT_BY_KEY = 'Sort By Key',
    SORT_BY_MANUAL = 'Sort By Manual',
    SORT_BY_PRIORITY = 'Sort By Priority',
    SORT_BY_TITLE = 'Sort By Title',
    SORT_BY_UPDATED_AT = 'Sort By Updated At',
    SHARE_PAGE = 'Share Page',
    SHARE_FOLDER = 'Share Folder',
    SHOW_ALL = 'Show All',
    SHOW_ALL_PAGES = 'Show All Pages',
    SHOW_CALENDAR = 'Show Calendar',
    SHOW_COMPLETED_TASKS = 'Show Completed Tasks',
    SHOW_COMPLETED_TASKS_IN_AGENDA = 'Show Completed Tasks In Agenda',
    SHOW_DISPLAY_PROPERTY = 'Show Display Property',
    SHOW_ISSUES = 'Show Issues',
    SHOW_PAGES = 'Show Pages',
    SHOW_PULL_REQUESTS = 'Show Pull Requests',
    SHOW_RECENT = 'Show Recent',
    SHOW_TASKS = 'Show Tasks',
    SHOW_UPDATES = 'Show Updates',
    START = 'Start',
    SUMMARIZE = 'Summarize',
    SWITCH = 'Switch',
    SWITCH_CATEGORY = 'Switch Category',
    SWITCH_PROJECT = 'Switch Project',
    SWITCH_SEARCH_TYPE = 'Switch Search Type',
    SWITCH_TAB = 'Switch Tab',
    TODAY = 'Today',
    UNFOCUS_AGENDA = 'Unfocus Agenda',
    UN_PIN = 'Un-pin',
    UNSELECT_ALL_CALENDARS = 'Unselect All Calendars',
    UNSHARE_PAGE = 'Unshare Page',
    UNSHARE_FOLDER = 'Unshare Folder',
    UPDATE = 'Update',
    UPDATE_EMOJI = 'Update Emoji',
    UPDATE_FILTER = 'Update Filter',
    VAULT_SET_UP = 'Vault Set-up',
    TODO = 'Set Todo',
    IN_PROGRESS = 'Set In Progress',
    DONE = 'Set Done',
    NO_STATUS = 'Set No Status',
}

export enum TrackingActionSource {
    ACTIVE = 'Active',
    AGENDA = 'Agenda',
    ALL_PAGES = 'All Pages',
    APPLE = 'Apple',
    APPLE_CALENDAR = 'Apple Calendar',
    ARCHIVE = 'Archive',
    ASSISTANT_SEARCH = 'Assistant Search',
    AUTOCOMPLETE = 'Autocomplete',
    BACKLINK_EDITOR = 'Backlink Editor',
    BACKLINK_DROPDOWN = 'Backlink Dropdown',
    BACKLINK_EDITOR_MY_DAY = 'Backlink Editor My Day',
    BACKLINK_EDITOR_PAGE = 'Backlink Editor Page',
    BACKLINK_INFO_PANEL = 'Backlink Info Panel',
    BACKLINK_PAGE_DELETE_MODAL = 'Backlink Page Delete Modal',
    BANNER = 'Banner',
    BUBBLE_MENU = 'Bubble Menu',
    BUTTON = 'Button',
    CHECK_FOR_UPDATE = 'Check for Update',
    CLICK = 'Click',
    CONTEXT_MENU = 'Context Menu',
    CUSTOM_VIEW = 'Custom View',
    CUSTOM_VIEW_DROPDOWN = 'Custom View Dropdown',
    DATE_PICKER = 'Date Picker',
    DRAG_AND_DROP = 'Drag & Drop',
    DROP = 'Drop',
    DROPDOWN = 'Dropdown',
    DUPLICATE = 'Duplicate',
    EDITOR = 'Editor',
    EDITOR_AUTOCOMPLETE = 'Editor Autocomplete',
    EMAIL_AND_PASSWORD = 'Email and Password',
    EMPTY_STATE = 'Empty State',
    ESC_KEY = 'Esc Key',
    EVENT = 'Event',
    EVENT_CLIP_DROPDOWN = 'Event Clip Dropdown',
    EVENT_CLIP_MODAL = 'Event Clip Modal',
    FOCUS_TASK = 'Focus Task',
    FOLLOW_US_ON_TWITTER = 'Follow us on Twitter',
    FULL_SEARCH = 'Full Search',
    GITHUB = 'Github',
    GITHUB_BENTO_CONTEXT_MENU = 'Github Bento Context Menu',
    GITHUB_BENTO_ONBOARDING = 'Github Bento Onboarding',
    GITHUB_MODAL = 'Github Clip Modal',
    GITHUB_CLIP_TAB = 'Github Clip Tab',
    GITHUB_ISSUE = 'Github Issue',
    GITHUB_ISSUE_MODAL = 'Github Issue Modal',
    GITHUB_PULL_REQUEST = 'Github Pull Request',
    GITHUB_PULL_REQUEST_MODAL = 'Github Pull Request Modal',
    GITHUB_TAB = 'Github Tab',
    GITHUB_TAB_ISSUE_CONTEXT_MENU = 'Github Tab Issue Context Menu',
    GITHUB_TAB_PULL_REQUEST_CONTEXT_MENU = 'Github Tab Pull Request Context Menu',
    GOOGLE = 'Google',
    GOOGLE_CALENDAR = 'Google Calendar',
    ICS = 'ICS',
    ICS_CALENDAR = 'ICS Calendar',
    INFO_PANEL = 'Info Panel',
    ISSUES = 'Issues',
    JIRA = 'Jira',
    JIRA_BENTO_CONTEXT_MENU = 'Jira Bento Context Menu',
    JIRA_BENTO_ONBOARDING = 'Jira Bento Onboarding',
    JIRA_CLIP_MODAL = 'Jira Clip Modal',
    JIRA_CLIP_TAB = 'Jira Clip Tab',
    JIRA_ISSUE = 'Jira Issue',
    JIRA_MODAL = 'Jira Modal',
    JIRA_PANEL = 'Jira Panel',
    JIRA_TAB = 'Jira Tab',
    JIRA_TAB_CONTEXT_MENU = 'Jira Tab Context Menu',
    JOIN_DISCORD = 'Join Discord',
    KEYBOARD_SHORTCUTS = 'Keyboard Shortcuts',
    LINEAR_TAB = 'Linear Tab',
    LINEAR_ISSUE_CONTEXT_MENU = 'Linear Issue Context Menu',
    LIENAR_ISSUE_MODAL = 'Linear Issue Modal',
    MARKDOWN = 'Markdown',
    MERMAID_MODAL = 'Mermaid Modal',
    MOBILE = 'Mobile',
    MOBILE_ADD_MENU = 'Mobile Add Menu',
    MOBILE_BACKLINK_INFO_PANEL = 'Mobile Backlink Info Panel',
    MOBILE_BOTTOM_BAR = 'Mobile Bottom Bar',
    MOBILE_BUBBLE_MENU = 'Mobile Bubble Menu',
    MOBILE_BUTTON = 'Mobile Button',
    MOBILE_DROPDOWN = 'Mobile Dropdown',
    MOBILE_NAVIGATION_SEARCH = 'Mobile Navigation Search',
    MOBILE_OVERDUE = 'Mobile Overdue',
    MOBILE_PAGE_DETAIL = 'Mobile Page Detail',
    MOBILE_SIDEBAR = 'Mobile Sidebar',
    MOBILE_TIMELINE = 'Mobile Timeline',
    MOVE_TO = 'Move To',
    MY_DAY = 'My Day',
    NAVIGATION = 'Navigation',
    NAVIGATION_INTERACTION = 'Navigation Interaction',
    NAVIGATION_SEARCH = 'Navigation Search',
    NEW_TAB = 'New Tab',
    NEW_VAULT = 'New Vault',
    NO_ACCOUNT = 'No Account',
    NOTIFICATION = 'Notification',
    NOTIFICATION_CONVERT_TO = 'Notification Convert To',
    OBSIDIAN = 'Obsidian',
    ONBOARDING = 'Onboarding',
    ONBOARDING_CLOUD = 'Onboarding Cloud',
    ONBOARDING_INTEGRATIONS = 'Onboarding Integrations',
    ONBOARDING_START = 'Onboarding Start',
    OVERDUE = 'Overdue',
    PAGE = 'Page Detail',
    PASTE = 'Paste',
    PAGE_CLIP = 'Page Clip',
    PAGE_ROW_CLIP = 'Page Row Clip',
    PICKER = 'Picker',
    PROJECT = 'Project',
    PROJECT_ADD_PAGE = 'Project Add Page',
    PULL_REQUESTS = 'Pull Requests',
    SETTINGS = 'Settings',
    SETTINGS_SIDEBAR = 'Settings Sidebar',
    SHORTCUT = 'Shortcut',
    SIDEBAR = 'Sidebar',
    SIDEBAR_CONTEXT_MENU = 'Sidebar Context Menu',
    SIDEBAR_FOLDER_CONTEXT_MENU = 'Sidebar Folder Context Menu',
    SIDEBAR_FOOTER = 'Sidebar Footer',
    SIDEBAR_PROJECT_CONTEXT_MENU = 'Sidebar Project Context Menu',
    SUPPORT_AND_FEEDBACK = 'Support and Feedback',
    TAB = 'Tab',
    TAB_SELECTOR = 'Tab Selector',
    TASK = 'Task',
    TEMPLATES_TAB = 'Templates Tab',
    TIMELINE = 'Timeline',
    TIMELINE_CALENDAR_DROPDOWN = 'Timeline Calendar Dropdown',
    TRAY = 'Tray',
    USER_GUIDE = 'User Guide',
    UPDATE_AND_RESTART = 'Update and Restart',
    QUICKADD = 'Quickadd',
    VAULT_SELECTOR = 'Vault Selector',
    VIEW_CONTEXT_MENU = 'View Context Menu',
    WHATS_NEW = "What's new",
    WORKSPACE_SELECTOR = 'Workspace Selector',
}

export enum TrackingActionSourceMeta {
    ALL = 'All',
    ALL_PAGES = 'All Pages',
    APPLE_CALENDAR = 'Apple Calendar',
    ASSIGNED = 'Assigned',
    ASSIGNEE = 'Assignee',
    ASSIGNEE_ASCENDING = 'Assignee Ascending',
    ASSIGNEE_DESCENDING = 'Assignee Descending',
    ASSISTANT = 'Assistant',
    BREADCRUMBS = 'Breadcrumbs',
    CLIP = 'Clip',
    COMMENTS = 'Comments',
    CONTEXT_MENU = 'Context Menu',
    CREATED = 'Created',
    CREATED_AT_ASCENDING = 'Created At Ascending',
    CREATED_AT_DESCENDING = 'Created At Descending',
    DARK = 'Dark',
    DATE = 'Date',
    DETAIL = 'Detail',
    DRAG = 'Drag',
    FAIL = 'Fail',
    FOLDER = 'Folder',
    GITHUB = 'Github',
    GITHUB_ISSUE = 'Github Issue',
    GITHUB_PULL_REQUEST = 'Github Pull Request',
    GITHUB_ISSUE_MODAL = 'Github Issue Modal',
    GITHUB_PULL_REQUEST_MODAL = 'Github Pull Request Modal',
    GOOGLE_CALENDAR = 'Google Calendar',
    GROUP_BY_FOLDER = 'Group By Folder',
    GROUP_BY_NONE = 'Group by None',
    GROUP_BY_STATUS = 'Group By Status',
    HAS_TASKS = 'Has Tasks',
    ICS_CALENDAR = 'ICS Calendar',
    ICON = 'Icon',
    ISSUE = 'Issue',
    JIRA = 'Jira',
    JIRA_DONE = 'Jira Done',
    JIRA_IN_PROGRESS = 'Jira In Progress',
    JIRA_TODO = 'Jira Todo',
    KEY = 'Key',
    KEY_ASCENDING = 'Key Ascending',
    KEY_DESCENDING = 'Key Descending',
    LABELS = 'Labels',
    LIGHT = 'Light',
    LINEAR = 'Linear',
    LINKS = 'Links',
    LIST = 'List',
    LOCAL = 'Local',
    MENTIONED = 'Mentioned',
    MOBILE = 'Mobile',
    MY_DAY = 'My Day',
    NARROW = 'Narrow',
    NUMBER = 'Number',
    ONBOARDING_CLOUD = 'Onboarding Cloud',
    ONBOARDING_INTEGRATIONS = 'Onboarding Integrations',
    ONBOARDING_START = 'Onboarding Start',
    PR = 'PR',
    PAGE = 'Page',
    PIN = 'Pin',
    PRIORITY = 'Priority',
    PRIORITY_ASCENDING = 'Priority Ascending',
    PRIORITY_DESCENDING = 'Priority Descending',
    PROJECT = 'Project',
    REMOTE = 'Remote',
    REPOSITORY = 'Repository',
    ROW_STATUS_PICKER = 'Row Status Picker',
    SEARCH = 'Search',
    SETTINGS = 'Settings',
    SORT_BY_CREATED_AT = 'Sort By Created At',
    SORT_BY_MANUAL = 'Sort By Manual',
    SORT_BY_TITLE = 'Sort By Title',
    SORT_BY_UPDATED_AT = 'Sort By Updated At',
    SORT_DIRECTION_DESCENDING = 'Sort Direction Descending',
    SORT_DIRECTION_ASCENDING = 'Sort Direction Ascending',
    STATUS = 'Status',
    SUCCESS = 'Success',
    SYSTEM = 'System',
    TASKS = 'Tasks',
    TIME_DELTA = 'Time Delta',
    TITLE_ASCENDING = 'Title Ascending',
    TITLE_DESCENDING = 'Title Descending',
    TYPE = 'Type',
    UPDATED = 'Updated',
    UPDATED_AT_ASCENDING = 'Updated At Ascending',
    UPDATED_AT_DESCENDING = 'Updated At Descending',
    URL = 'Url',
    WIDE = 'Wide',
}

export type TrackingProperties = {
    action: TrackingAction;
    sourceMeta?: TrackingActionSourceMeta | string | null;
    entityId?: string | null;
    source?: TrackingActionSource | null;
};