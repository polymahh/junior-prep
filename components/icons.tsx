import {
    BookOpenCheck,
    Layout,
    LogOut,
    LucideIcon,
    LucideProps,
    Moon,
    PlusCircle,
    Settings,
    SunMedium,
    Users,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
    sun: SunMedium,
    moon: Moon,
    settings: Settings,
    logout: LogOut,
    dashboard: Layout,
    courses: BookOpenCheck,
    teams: Users,
    create: PlusCircle,

    profile: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    ),
    javascript: (props: LucideProps) => (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="currentColor"
                d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
            ></path>
        </svg>
    ),
    react: (props: LucideProps) => (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="currentColor"
                d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
            ></path>
        </svg>
    ),
    html: (props: LucideProps) => (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="currentColor"
                d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
            ></path>
        </svg>
    ),
    css: (props: LucideProps) => (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="currentColor"
                d="M0 16.5V1.127C0 .502.506 0 1.127 0h21.748C23.498 0 24 .505 24 1.126V15.95c-.676-.413-1.467-.62-2.372-.62-1.258 0-2.212.296-2.862.886-.65.591-.974 1.333-.974 2.226 0 .979.336 1.698 1.008 2.158.397.276 1.114.53 2.151.765l1.056.237c.618.135 1.07.29 1.36.466.288.18.432.436.432.765 0 .564-.29.95-.872 1.157l-.024.008H20.68a1.528 1.528 0 0 1-.688-.462c-.185-.225-.31-.565-.372-1.021h-1.99c0 .56.109 1.053.325 1.483h-1.681c.196-.396.294-.837.294-1.32 0-.889-.297-1.568-.892-2.037-.384-.302-.952-.543-1.705-.724l-1.719-.412c-.663-.158-1.096-.296-1.299-.413a.858.858 0 0 1-.473-.799c0-.387.16-.69.48-.906.32-.217.75-.325 1.286-.325.482 0 .886.084 1.21.25.488.253.75.68.785 1.28h2.003c-.036-1.06-.425-1.869-1.167-2.426-.742-.557-1.639-.836-2.69-.836-1.258 0-2.212.296-2.861.886-.65.591-.975 1.333-.975 2.226 0 .979.336 1.698 1.008 2.158.397.276 1.114.53 2.152.765l1.055.237c.618.135 1.071.29 1.36.466.288.18.433.436.433.765 0 .564-.291.95-.873 1.157l-.025.008h-2.223a1.528 1.528 0 0 1-.688-.462c-.185-.225-.31-.565-.372-1.021h-1.99c0 .56.108 1.053.324 1.483H6.611a4.75 4.75 0 0 0 .667-1.801H5.215c-.14.514-.316.9-.528 1.157-.261.326-.603.54-1.026.644H2.42c-.45-.115-.839-.37-1.165-.762C.792 22.68.56 21.842.56 20.724c0-1.119.218-1.984.656-2.595.437-.611 1.035-.917 1.793-.917.744 0 1.305.217 1.684.65.212.243.386.604.52 1.082H7.3c-.032-.622-.262-1.242-.69-1.86-.776-1.1-2.003-1.65-3.68-1.65-1.168 0-2.145.355-2.929 1.067zm24 3.654v-1.562h-.518c-.036-.6-.298-1.026-.785-1.279-.325-.166-.728-.25-1.21-.25-.537 0-.966.108-1.286.325-.32.216-.48.518-.48.906 0 .357.157.623.473.799.203.117.636.255 1.299.413l1.718.412c.29.07.554.149.789.236z"
            ></path>
        </svg>
    ),
    discord: (props: LucideProps) => (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="currentColor"
                d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
            ></path>
        </svg>
    ),

    gitHub: (props: LucideProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    line: (props: LucideProps) => (
        <svg viewBox="0 0 291 26" {...props}>
            <path
                stroke="#CB0F0F"
                strokeLinecap="round"
                fill="none"
                strokeWidth="8"
                d="M4.5 21.4999C57.1667 11.1666 187.3 -5.10006 286.5 12.4999"
            ></path>
        </svg>
    ),
    arrow: (props: LucideProps) => (
        <svg viewBox="0 0 88 81" {...props}>
            <path
                stroke="#672271"
                strokeLinecap="round"
                fill="none"
                d="M15.2136 79.1696C10.8472 76.887 5.04218 73.6995 1.21351 70.8186M1.21351 70.8186C0.772252 70.4868 4.38622 68.3936 4.56197 68.3098C8.41515 66.4678 12.421 65.1362 16.5365 63.8578M1.21351 70.8186C27.3706 78.2576 53.2499 69.4892 61.5784 53.66C62.4039 52.0911 63.3005 50.3827 64.0235 48.6094M64.0235 48.6094C65.1749 45.7854 65.886 42.7965 65.1684 39.9439C64.506 37.3112 62.409 34.127 59.3994 33.3036C53.7771 31.7656 49.1597 37.3734 51.1335 42.1415C52.8679 46.3317 59.2398 49.6153 64.0235 48.6094ZM64.0235 48.6094C64.1244 48.5882 64.2246 48.5651 64.324 48.54C88.3236 42.4893 89.2908 16.1627 76.7926 1.60817"
                strokeWidth="3"
            ></path>
        </svg>
    ),
    bigarrow: (props: LucideProps) => (
        <svg viewBox="0 0 100 47" {...props}>
            <path
                stroke="#672271"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                d="M69.8347 43.5203C69.4071 39.161 69.0598 33.9701 67.8235 27.9625C48.4677 28.34 23.2134 36.9967 2.34725 45.3657C15.2818 29.4854 32.6481 19.7986 50.2338 13.7745C53.4414 12.6758 57.3816 11.6311 61.2651 10.9907C59.5795 8.20674 55.9987 5.06495 54.3209 2.27694C66.8438 3.89346 86.6883 7.58883 97.7406 12.531C85.8444 24.5591 72.8291 39.3018 69.8347 43.5203Z"
                strokeWidth="2"
            ></path>
        </svg>
    ),
    trophy: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 143" fill="none" {...props}>
            <path
                d="M55.6024 99.2173C54.1881 101.455 52.8304 103.602 51.8364 104.97C52.9593 106.897 55.4813 111.648 56.1015 115.336C51.8501 112.769 33.8314 98.5447 31.9789 96.5989C35.9197 97.0026 40.1351 97.8378 43.8907 99.0592C45.6707 96.5844 47.5436 94.3983 49.5303 92.0793C51.1004 90.2465 52.7417 88.3306 54.4644 86.1238C54.2075 85.8433 53.81 85.3442 53.4167 84.8503C53.0487 84.3881 52.6843 83.9305 52.4421 83.6608C49.4187 80.295 48.3079 76.3867 48.3557 72.429C44.9743 71.64 42.8069 67.9162 41.7953 64.9129C39.6719 58.6092 38.3714 48.1881 45.5924 44.5249C49.9021 42.3386 56.3432 45.4607 59.9055 47.8926C61.3087 46.4206 62.9186 45.1721 64.7074 44.8759C67.9508 44.3386 71.6746 45.8865 74.4461 47.3995C80.6081 50.7633 86.3511 54.9555 90.9035 60.3797C91.0139 60.5108 91.131 60.6491 91.2539 60.7943C93.3095 63.2225 96.9912 67.5714 98.0939 71.7751C98.3114 72.7752 98.3465 73.7622 98.1312 74.7099C97.9385 75.5576 97.1855 76.9036 95.9957 78.5016C96.3506 78.9578 96.7441 79.4413 97.1567 79.9484C99.8543 83.2639 103.372 87.5875 102.305 91.8526C101.293 95.9028 97.4618 97.5865 93.8415 98.6621C87.0737 100.673 76.3761 101.747 72.5053 94.0118C70.6446 94.221 68.7838 94.1438 66.9621 93.7024C65.1371 93.2602 63.0007 92.4139 60.9699 91.2621C59.6101 92.8776 57.5525 96.1325 55.6024 99.2173ZM50.5583 47.6071C44.4695 45.6772 42.4616 55.1942 43.5775 59.429C43.9167 60.7165 44.3559 61.9809 44.8377 63.2208C45.4014 64.6715 47.1076 67.3304 48.7603 67.8072C49.1944 65.9413 49.8894 64.0349 50.605 62.1599C52.0879 58.2746 54.3333 54.4165 56.7042 50.9854C54.8934 49.4984 52.8048 48.319 50.5583 47.6071ZM96.4112 93.0735C90.5527 96.5997 82.0862 97.8638 76.6259 92.8618C82.6246 90.2502 89.2949 86.7175 93.8264 81.9363C93.9585 82.0883 94.0941 82.2387 94.2299 82.3894C94.553 82.7479 94.8777 83.1082 95.1608 83.4949C96.9871 85.9904 100.35 90.7029 96.4112 93.0735Z"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M71.9113 86.537C67.0044 81.1787 61.4427 76.716 56.3709 73.8917C54.2629 72.7179 52.1423 71.359 49.7557 70.8069"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M80.0525 87.2111C78.795 85.481 77.5671 83.7614 76.1328 82.1692C70.4634 75.8754 63.9855 70.8144 56.5403 66.8699"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M73.0552 27.1056C71.6104 28.629 70.0766 30.1846 68.7859 31.836"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M63.5428 29.6212C64.5419 30.2685 65.4855 30.9981 66.4127 31.7437"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M69.5615 34.0024C70.5101 35.0026 71.598 35.7407 72.6784 36.5787"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M63.8621 38.122C64.4692 36.9151 65.4111 35.2589 66.497 34.3892"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M73.0257 102.378C72.1917 103.144 71.4378 103.991 70.6791 104.83"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M66.9508 103.835C67.4296 104.118 67.9059 104.401 68.3735 104.702"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M68.8142 106.976C68.0362 107.906 67.3384 108.894 66.5815 109.839"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M70.5995 106.961C71.3125 107.43 72.0361 107.893 72.7227 108.4"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M105.46 59.6295C107.134 56.7242 108.601 54.6519 107.073 51.3373C109.772 52.4134 113.464 50.7104 115.466 48.8022C114.306 51.1855 112.809 53.8631 113.342 56.6068C110.598 55.8875 107.534 57.3852 105.667 59.3538"
                stroke="#672271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M38.3523 85.2846C39.0561 84.0964 39.7425 82.587 38.8504 81.3289C40.2374 81.6946 41.6513 80.933 42.6027 79.9434C41.9376 80.8927 41.2318 82.3005 41.9182 83.398C40.5087 83.0242 39.3613 84.459 38.3523 85.2846Z"
                stroke="#672271"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    logo: (props: LucideProps) => (
        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 39" {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="222" height="43" viewBox="0 0 222 43" {...props}>
            <g clipPath="url(#clip0_43_2)">
                <path
                    d="M14.3032 2.30298H22.6062V23.5757C22.5961 25.5959 22.0861 27.3737 21.0759 28.909C20.0759 30.4343 18.6921 31.6262 16.9244 32.4848C15.1668 33.3333 13.1416 33.7575 10.8487 33.7575C8.85875 33.7575 7.04056 33.4141 5.3941 32.7272C3.74763 32.0303 2.43449 30.9394 1.45469 29.4545C0.47489 27.9596 -0.0099468 26.0201 0.000154623 23.6363H8.42441C8.45472 24.4141 8.58603 25.0707 8.81834 25.606C9.06076 26.1414 9.3941 26.5454 9.81834 26.8181C10.2527 27.0808 10.7779 27.2121 11.3941 27.2121C12.0204 27.2121 12.5456 27.0757 12.9699 26.803C13.4042 26.5303 13.7325 26.1262 13.9547 25.5909C14.1769 25.0454 14.2931 24.3737 14.3032 23.5757L14.3032 2.30298Z"
                    fill="currentColor"
                />
                <path
                    d="M38.59 23.1515V10.0605H46.9536V33.3333H39.0142V28.909H38.7718C38.2667 30.3939 37.3829 31.5555 36.1203 32.3939C34.8576 33.2222 33.3576 33.6363 31.6202 33.6363C29.994 33.6363 28.5697 33.2626 27.3475 32.5151C26.1354 31.7676 25.1909 30.7373 24.5142 29.4242C23.8475 28.1111 23.5091 26.606 23.499 24.9091V10.0605H31.8627V23.1515C31.8728 24.303 32.1657 25.207 32.7415 25.8636C33.3273 26.5202 34.1455 26.8485 35.196 26.8485C35.893 26.8485 36.494 26.702 36.999 26.409C37.5142 26.106 37.9081 25.6818 38.1809 25.1363C38.4637 24.5808 38.6001 23.9192 38.59 23.1515Z"
                    fill="currentColor"
                />
                <path
                    d="M47.3778 20.2424V33.3333H39.0142V10.0606H46.9536V14.4848H47.196C47.701 13.0101 48.5899 11.8535 49.8627 11.0151C51.1455 10.1768 52.6404 9.75757 54.3475 9.75757C55.994 9.75757 57.4233 10.1363 58.6354 10.8939C59.8576 11.6414 60.8021 12.6717 61.4687 13.9848C62.1455 15.298 62.4788 16.798 62.4687 18.4848V33.3333H54.1051V20.2424C54.1152 19.0909 53.8222 18.1869 53.2263 17.5303C52.6404 16.8737 51.8223 16.5454 50.7718 16.5454C50.0849 16.5454 49.4839 16.697 48.9687 17C48.4637 17.2929 48.0748 17.7172 47.8021 18.2727C47.5293 18.8182 47.3879 19.4747 47.3778 20.2424Z"
                    fill="currentColor"
                />
                <path
                    d="M63.3613 33.3334V10.0606H71.725V33.3334H63.3613ZM67.5583 7.63636C66.4169 7.63636 65.4421 7.26259 64.634 6.51515C63.826 5.76767 63.4219 4.8687 63.4219 3.8182C63.4219 2.76769 63.826 1.86868 64.634 1.12121C65.4421 0.373738 66.4118 0 67.5431 0C68.6846 0 69.6543 0.373719 70.4522 1.12121C71.2603 1.86868 71.6644 2.76769 71.6644 3.8182C71.6644 4.85692 71.2693 5.74747 70.4793 6.48992C70.4702 6.49748 70.4611 6.50505 70.4521 6.51639C69.6541 7.26387 68.6896 7.63636 67.5583 7.63636Z"
                    fill="currentColor"
                />
                <path
                    d="M83.7855 33.7576C81.2602 33.7576 79.0986 33.2576 77.3006 32.2576C75.5026 31.2475 74.1238 29.8434 73.1642 28.0455C72.2046 26.2374 71.7249 24.1414 71.7249 21.7576C71.7249 19.3737 72.2046 17.2828 73.1642 15.4848C74.1238 13.6768 75.5026 12.2727 77.3006 11.2727C79.0986 10.2626 81.2602 9.75757 83.7855 9.75757C86.3107 9.75757 88.4723 10.2626 90.2703 11.2727C92.0683 12.2727 93.4471 13.6768 94.4067 15.4848C95.3663 17.2828 95.8461 19.3737 95.8461 21.7576C95.8461 24.1414 95.3663 26.2374 94.4067 28.0455C93.4471 29.8434 92.0683 31.2475 90.2703 32.2576C88.4723 33.2576 86.3107 33.7576 83.7855 33.7576ZM83.8461 27.5757C84.5532 27.5757 85.1643 27.3384 85.6794 26.8636C86.1946 26.3889 86.5936 25.7121 86.8764 24.8333C87.1592 23.9545 87.3006 22.9091 87.3006 21.6969C87.3006 20.4747 87.1592 19.4293 86.8764 18.5606C86.5936 17.6818 86.1946 17.005 85.6794 16.5303C85.1643 16.0555 84.5532 15.8182 83.8461 15.8182C83.0986 15.8182 82.4572 16.0555 81.9218 16.5303C81.3865 17.005 80.9774 17.6818 80.6946 18.5606C80.4117 19.4293 80.2703 20.4747 80.2703 21.6969C80.2703 22.9091 80.4117 23.9545 80.6946 24.8333C80.9774 25.7121 81.3865 26.3889 81.9218 26.8636C82.4572 27.3384 83.0986 27.5757 83.8461 27.5757Z"
                    fill="currentColor"
                />
                <path
                    d="M95.8462 33.3333V10.0606H103.967V14.4848H104.21C104.634 12.8485 105.306 11.6515 106.225 10.8939C107.154 10.1363 108.24 9.75757 109.483 9.75757C109.846 9.75757 110.205 9.78794 110.558 9.84866C110.922 9.89905 111.27 9.97479 111.604 10.0758V17.2122C111.19 17.0708 110.68 16.9647 110.073 16.8939C109.467 16.8231 108.947 16.7877 108.513 16.7877C107.695 16.7877 106.957 16.9746 106.301 17.3483C105.654 17.712 105.144 18.2271 104.77 18.8938C104.397 19.5503 104.21 20.3231 104.21 21.212V33.3332L95.8462 33.3333Z"
                    fill="currentColor"
                />
                <path
                    d="M125.051 33.3333V2.30298H138.445C140.748 2.30298 142.763 2.75752 144.49 3.66661C146.217 4.5757 147.561 5.85347 148.521 7.49994C149.48 9.14642 149.96 11.0707 149.96 13.2727C149.96 15.4949 149.465 17.4191 148.475 19.0454C147.495 20.6717 146.116 21.9242 144.339 22.803C142.571 23.6818 140.505 24.1212 138.142 24.1212H130.142V17.5757H136.445C137.435 17.5757 138.278 17.4041 138.975 17.0606C139.682 16.7072 140.223 16.2071 140.596 15.5606C140.98 14.9141 141.172 14.1515 141.172 13.2727C141.172 12.3838 140.98 11.6262 140.596 10.9999C140.223 10.3636 139.682 9.87875 138.975 9.54539C138.278 9.20183 137.435 9.03024 136.445 9.03024H133.475V33.3333H125.051Z"
                    fill="currentColor"
                />
                <path
                    d="M150.853 33.3333V10.0606H158.974V14.4848H159.216C159.641 12.8485 160.312 11.6515 161.232 10.8939C162.161 10.1363 163.247 9.75757 164.489 9.75757C164.853 9.75757 165.211 9.78794 165.565 9.84866C165.929 9.89905 166.277 9.97479 166.61 10.0758V17.2122C166.196 17.0708 165.686 16.9647 165.08 16.8939C164.474 16.8231 163.954 16.7877 163.519 16.7877C162.701 16.7877 161.964 16.9746 161.307 17.3483C160.661 17.712 160.151 18.2271 159.777 18.8938C159.403 19.5503 159.216 20.3231 159.216 21.212V33.3332L150.853 33.3333Z"
                    fill="currentColor"
                />
                <path
                    d="M177.917 33.7576C175.432 33.7576 173.291 33.2828 171.493 32.3333C169.705 31.3738 168.326 30 167.357 28.2121C166.397 26.4141 165.917 24.2626 165.917 21.7576C165.917 19.3535 166.402 17.2525 167.372 15.4545C168.341 13.6566 169.71 12.2576 171.478 11.2576C173.246 10.2576 175.331 9.75757 177.735 9.75757C179.493 9.75757 181.084 10.0303 182.508 10.5757C183.932 11.1212 185.15 11.9141 186.16 12.9545C187.17 13.9848 187.948 15.2373 188.493 16.7121C189.038 18.1868 189.311 19.8484 189.311 21.6969V23.6363H168.523V19.0303H181.614C181.604 18.3636 181.432 17.7778 181.099 17.2727C180.776 16.7576 180.336 16.3586 179.781 16.0757C179.235 15.7828 178.614 15.6364 177.917 15.6364C177.24 15.6364 176.619 15.7828 176.054 16.0757C175.488 16.3586 175.033 16.7525 174.69 17.2576C174.357 17.7626 174.18 18.3535 174.16 19.0303V24C174.16 24.7475 174.316 25.4141 174.629 26C174.942 26.5859 175.392 27.0455 175.978 27.3788C176.564 27.7121 177.271 27.8788 178.099 27.8788C178.675 27.8788 179.2 27.798 179.675 27.6365C180.16 27.475 180.574 27.2427 180.917 26.9395C181.261 26.6264 181.513 26.2527 181.675 25.8183H189.311C189.049 27.4345 188.427 28.8385 187.448 30.0305C186.468 31.2123 185.17 32.1315 183.554 32.788C181.948 33.4345 180.069 33.7576 177.917 33.7576Z"
                    fill="currentColor"
                />
                <path
                    d="M189.308 42.0606V10.0606H197.611V14.1212H197.792C198.095 13.3333 198.54 12.6111 199.126 11.9545C199.712 11.2879 200.439 10.7576 201.308 10.3636C202.176 9.9596 203.186 9.75757 204.338 9.75757C205.873 9.75757 207.333 10.1667 208.717 10.9848C210.111 11.803 211.242 13.0909 212.111 14.8485C212.989 16.6061 213.429 18.8889 213.429 21.6969C213.429 24.3838 213.01 26.6111 212.171 28.3788C211.343 30.1465 210.232 31.4647 208.838 32.3333C207.454 33.202 205.934 33.6364 204.277 33.6364C203.186 33.6364 202.212 33.4596 201.353 33.1061C200.505 32.7424 199.777 32.2525 199.171 31.6364C198.575 31.0101 198.116 30.303 197.792 29.5151H197.671V42.0606H189.308ZM197.489 21.6969C197.489 22.8283 197.636 23.8081 197.929 24.6364C198.232 25.4545 198.656 26.0909 199.202 26.5455C199.757 26.9899 200.419 27.2121 201.186 27.2121C201.954 27.2121 202.606 26.9949 203.141 26.5606C203.686 26.1161 204.101 25.4848 204.383 24.6667C204.676 23.8384 204.823 22.8485 204.823 21.6969C204.823 20.5454 204.676 19.5606 204.383 18.7424C204.101 17.9141 203.686 17.2828 203.141 16.8484C202.606 16.404 201.954 16.1818 201.186 16.1818C200.419 16.1818 199.757 16.404 199.202 16.8484C198.656 17.2828 198.232 17.9141 197.929 18.7424C197.636 19.5606 197.489 20.5454 197.489 21.6969Z"
                    fill="currentColor"
                />
                <path
                    d="M111.633 17.4365C111.795 18.5198 112.4 24.0883 118.266 24.122H126.827V17.4365H111.633Z"
                    fill="currentColor"
                />
                <path
                    d="M217.565 33.3317C216.424 33.3317 215.449 32.9579 214.641 32.2105C213.833 31.463 213.429 30.564 213.429 29.5135C213.429 28.463 213.833 27.564 214.641 26.8166C215.449 26.0691 216.419 25.6953 217.55 25.6953C218.691 25.6953 219.661 26.0691 220.459 26.8166C221.267 27.564 221.671 28.463 221.671 29.5135C221.671 30.564 221.267 31.463 220.459 32.2105C219.661 32.958 218.696 33.3317 217.565 33.3317Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_43_2">
                    <rect width="221.671" height="42.0606" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
}
