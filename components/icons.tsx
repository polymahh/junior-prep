import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  discord: (props: LucideProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
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
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="58 0 64 34" {...props}>
      <path
        fill="currentColor"
        d="M 551.18,-117.69
        C 551.18,-117.69 551.18,-48.55 551.18,-48.55
          551.18,-48.55 510.32,-48.55 510.32,-48.55
          510.32,-48.55 510.32,-117.69 510.32,-117.69
          510.32,-117.69 551.18,-117.69 551.18,-117.69 Z
        M 182.00,24.61
        C 182.00,25.61 181.80,26.30 181.40,26.68
          180.99,27.06 180.25,27.25 179.16,27.25
          178.05,27.25 177.31,27.07 176.92,26.70
          176.54,26.33 176.35,25.67 176.35,24.71
          176.35,23.71 176.55,23.02 176.94,22.63
          177.34,22.24 178.09,22.04 179.19,22.04
          180.29,22.04 181.03,22.23 181.42,22.61
          181.81,22.98 182.00,23.65 182.00,24.61
          182.00,24.61 182.00,24.61 182.00,24.61 Z
        M 174.54,17.07
        C 174.54,18.63 174.37,20.05 174.03,21.31
          173.71,22.56 173.23,23.63 172.59,24.51
          171.96,25.39 171.16,26.07 170.21,26.54
          169.27,27.01 168.18,27.25 166.96,27.25
          166.46,27.25 165.99,27.20 165.56,27.09
          165.14,27.00 164.73,26.86 164.33,26.66
          163.94,26.45 163.55,26.19 163.16,25.89
          162.77,25.59 162.37,25.23 161.96,24.82
          161.96,24.82 161.96,33.11 161.96,33.11
          161.96,33.24 161.92,33.36 161.84,33.47
          161.76,33.57 161.62,33.66 161.43,33.72
          161.25,33.80 161.00,33.86 160.69,33.90
          160.38,33.94 159.98,33.96 159.50,33.96
          159.02,33.96 158.62,33.94 158.31,33.90
          158.00,33.86 157.75,33.80 157.55,33.72
          157.37,33.66 157.24,33.57 157.16,33.47
          157.09,33.36 157.05,33.24 157.05,33.11
          157.05,33.11 157.05,8.52 157.05,8.52
          157.05,8.39 157.08,8.28 157.14,8.19
          157.21,8.08 157.32,8.00 157.47,7.93
          157.64,7.87 157.86,7.82 158.12,7.79
          158.39,7.75 158.73,7.74 159.13,7.74
          159.52,7.74 159.85,7.75 160.10,7.79
          160.38,7.82 160.59,7.87 160.75,7.93
          160.92,8.00 161.03,8.08 161.10,8.19
          161.16,8.28 161.20,8.39 161.20,8.52
          161.20,8.52 161.20,10.60 161.20,10.60
          161.70,10.07 162.20,9.61 162.68,9.22
          163.17,8.81 163.67,8.47 164.18,8.21
          164.68,7.93 165.20,7.73 165.73,7.60
          166.28,7.47 166.86,7.40 167.47,7.40
          168.74,7.40 169.83,7.66 170.72,8.17
          171.62,8.67 172.34,9.36 172.90,10.24
          173.47,11.12 173.89,12.15 174.15,13.32
          174.41,14.49 174.54,15.74 174.54,17.07
          174.54,17.07 174.54,17.07 174.54,17.07 Z
        M 169.44,17.42
        C 169.44,16.67 169.38,15.96 169.26,15.27
          169.16,14.58 168.97,13.96 168.70,13.42
          168.44,12.88 168.09,12.45 167.64,12.14
          167.22,11.81 166.68,11.64 166.03,11.64
          165.70,11.64 165.38,11.70 165.05,11.80
          164.74,11.89 164.42,12.05 164.08,12.27
          163.75,12.50 163.42,12.79 163.07,13.14
          162.72,13.50 162.35,13.94 161.96,14.46
          161.96,14.46 161.96,20.27 161.96,20.27
          162.64,21.15 163.30,21.83 163.92,22.32
          164.55,22.79 165.20,23.03 165.87,23.03
          166.51,23.03 167.05,22.86 167.49,22.54
          167.94,22.21 168.31,21.78 168.60,21.25
          168.88,20.71 169.09,20.11 169.22,19.44
          169.36,18.77 169.44,18.10 169.44,17.42
          169.44,17.42 169.44,17.42 169.44,17.42 Z
        M 153.01,16.81
        C 153.01,17.42 152.88,17.86 152.61,18.15
          152.35,18.44 151.98,18.59 151.51,18.59
          151.51,18.59 140.94,18.59 140.94,18.59
          140.94,19.34 141.02,20.02 141.19,20.64
          141.37,21.25 141.65,21.77 142.03,22.20
          142.42,22.62 142.91,22.94 143.51,23.17
          144.12,23.39 144.85,23.50 145.69,23.50
          146.55,23.50 147.30,23.44 147.95,23.32
          148.60,23.19 149.16,23.05 149.62,22.91
          150.11,22.75 150.50,22.61 150.81,22.50
          151.12,22.36 151.38,22.30 151.57,22.30
          151.69,22.30 151.79,22.32 151.87,22.38
          151.94,22.42 152.01,22.50 152.06,22.61
          152.11,22.73 152.14,22.90 152.16,23.13
          152.18,23.34 152.20,23.61 152.20,23.94
          152.20,24.23 152.19,24.48 152.17,24.69
          152.16,24.88 152.14,25.05 152.12,25.20
          152.09,25.34 152.05,25.47 152.00,25.57
          151.95,25.67 151.88,25.76 151.79,25.85
          151.71,25.94 151.48,26.07 151.10,26.23
          150.73,26.38 150.25,26.54 149.66,26.70
          149.08,26.84 148.41,26.97 147.66,27.07
          146.90,27.19 146.10,27.25 145.24,27.25
          143.69,27.25 142.34,27.05 141.17,26.66
          140.01,26.26 139.05,25.67 138.27,24.86
          137.49,24.06 136.90,23.05 136.51,21.82
          136.14,20.60 135.95,19.17 135.95,17.52
          135.95,15.96 136.15,14.55 136.55,13.30
          136.95,12.04 137.54,10.97 138.31,10.10
          139.07,9.22 140.00,8.55 141.09,8.09
          142.19,7.63 143.44,7.40 144.81,7.40
          146.27,7.40 147.51,7.62 148.53,8.05
          149.57,8.49 150.42,9.09 151.08,9.87
          151.75,10.63 152.23,11.54 152.55,12.59
          152.86,13.64 153.01,14.79 153.01,16.02
          153.01,16.02 153.01,16.81 153.01,16.81 Z
        M 148.26,14.60
        C 148.30,13.21 148.02,12.12 147.42,11.33
          146.84,10.52 145.93,10.12 144.69,10.12
          144.07,10.12 143.53,10.24 143.06,10.48
          142.60,10.71 142.22,11.04 141.91,11.44
          141.61,11.84 141.38,12.31 141.21,12.87
          141.05,13.41 140.96,13.98 140.94,14.60
          140.94,14.60 148.26,14.60 148.26,14.60 Z
        M 134.39,10.16
        C 134.39,10.64 134.38,11.02 134.35,11.33
          134.33,11.63 134.29,11.87 134.24,12.04
          134.18,12.21 134.11,12.33 134.02,12.39
          133.94,12.46 133.84,12.49 133.71,12.49
          133.61,12.49 133.49,12.47 133.36,12.43
          133.23,12.38 133.08,12.33 132.91,12.27
          132.76,12.22 132.58,12.18 132.39,12.14
          132.19,12.08 131.98,12.06 131.74,12.06
          131.47,12.06 131.20,12.12 130.92,12.23
          130.65,12.34 130.37,12.51 130.07,12.75
          129.78,12.98 129.48,13.30 129.15,13.69
          128.84,14.09 128.50,14.58 128.14,15.15
          128.14,15.15 128.14,26.13 128.14,26.13
          128.14,26.26 128.10,26.38 128.02,26.48
          127.94,26.57 127.81,26.65 127.61,26.72
          127.43,26.78 127.18,26.83 126.87,26.86
          126.56,26.90 126.16,26.92 125.68,26.92
          125.20,26.92 124.81,26.90 124.50,26.86
          124.18,26.83 123.93,26.78 123.74,26.72
          123.55,26.65 123.42,26.57 123.35,26.48
          123.27,26.38 123.23,26.26 123.23,26.13
          123.23,26.13 123.23,8.52 123.23,8.52
          123.23,8.39 123.26,8.28 123.33,8.19
          123.39,8.08 123.51,8.00 123.68,7.93
          123.85,7.87 124.06,7.82 124.32,7.79
          124.59,7.75 124.93,7.74 125.33,7.74
          125.75,7.74 126.09,7.75 126.37,7.79
          126.64,7.82 126.85,7.87 126.99,7.93
          127.14,8.00 127.26,8.08 127.32,8.19
          127.39,8.28 127.42,8.39 127.42,8.52
          127.42,8.52 127.42,10.71 127.42,10.71
          127.87,10.06 128.30,9.52 128.70,9.10
          129.11,8.66 129.49,8.32 129.85,8.07
          130.22,7.82 130.58,7.65 130.94,7.56
          131.31,7.45 131.67,7.40 132.03,7.40
          132.20,7.40 132.39,7.41 132.58,7.44
          132.77,7.45 132.98,7.49 133.18,7.54
          133.39,7.58 133.57,7.63 133.73,7.70
          133.88,7.75 134.00,7.81 134.06,7.87
          134.14,7.94 134.19,8.01 134.22,8.09
          134.26,8.17 134.29,8.28 134.31,8.43
          134.34,8.56 134.36,8.76 134.37,9.04
          134.39,9.31 134.39,9.69 134.39,10.16
          134.39,10.16 134.39,10.16 134.39,10.16 Z
        M 119.31,17.07
        C 119.31,18.63 119.15,20.05 118.81,21.31
          118.48,22.56 118.00,23.63 117.37,24.51
          116.73,25.39 115.94,26.07 114.99,26.54
          114.04,27.01 112.96,27.25 111.74,27.25
          111.23,27.25 110.76,27.20 110.33,27.09
          109.92,27.00 109.51,26.86 109.11,26.66
          108.72,26.45 108.33,26.19 107.94,25.89
          107.55,25.59 107.15,25.23 106.73,24.82
          106.73,24.82 106.73,33.11 106.73,33.11
          106.73,33.24 106.69,33.36 106.61,33.47
          106.54,33.57 106.40,33.66 106.20,33.72
          106.02,33.80 105.78,33.86 105.46,33.90
          105.15,33.94 104.76,33.96 104.28,33.96
          103.79,33.96 103.40,33.94 103.09,33.90
          102.78,33.86 102.52,33.80 102.33,33.72
          102.15,33.66 102.02,33.57 101.94,33.47
          101.86,33.36 101.82,33.24 101.82,33.11
          101.82,33.11 101.82,8.52 101.82,8.52
          101.82,8.39 101.85,8.28 101.92,8.19
          101.98,8.08 102.09,8.00 102.25,7.93
          102.42,7.87 102.63,7.82 102.89,7.79
          103.17,7.75 103.50,7.74 103.91,7.74
          104.29,7.74 104.62,7.75 104.88,7.79
          105.15,7.82 105.37,7.87 105.52,7.93
          105.69,8.00 105.81,8.08 105.87,8.19
          105.94,8.28 105.97,8.39 105.97,8.52
          105.97,8.52 105.97,10.60 105.97,10.60
          106.48,10.07 106.97,9.61 107.45,9.22
          107.94,8.81 108.44,8.47 108.95,8.21
          109.46,7.93 109.98,7.73 110.51,7.60
          111.05,7.47 111.63,7.40 112.24,7.40
          113.52,7.40 114.60,7.66 115.50,8.17
          116.39,8.67 117.12,9.36 117.68,10.24
          118.25,11.12 118.66,12.15 118.92,13.32
          119.18,14.49 119.31,15.74 119.31,17.07
          119.31,17.07 119.31,17.07 119.31,17.07 Z
        M 114.21,17.42
        C 114.21,16.67 114.15,15.96 114.04,15.27
          113.93,14.58 113.74,13.96 113.47,13.42
          113.21,12.88 112.86,12.45 112.42,12.14
          111.99,11.81 111.45,11.64 110.80,11.64
          110.48,11.64 110.15,11.70 109.83,11.80
          109.52,11.89 109.19,12.05 108.85,12.27
          108.53,12.50 108.19,12.79 107.84,13.14
          107.49,13.50 107.12,13.94 106.73,14.46
          106.73,14.46 106.73,20.27 106.73,20.27
          107.42,21.15 108.07,21.83 108.70,22.32
          109.32,22.79 109.97,23.03 110.65,23.03
          111.28,23.03 111.82,22.86 112.26,22.54
          112.72,22.21 113.09,21.78 113.37,21.25
          113.66,20.71 113.87,20.11 114.00,19.44
          114.14,18.77 114.21,18.10 114.21,17.42
          114.21,17.42 114.21,17.42 114.21,17.42 Z
        M 98.22,16.87
        C 98.22,17.63 98.15,18.17 98.00,18.47
          97.86,18.77 97.63,18.92 97.32,18.92
          97.32,18.92 92.96,18.92 92.96,18.92
          92.63,18.92 92.40,18.77 92.26,18.47
          92.11,18.15 92.04,17.62 92.04,16.87
          92.04,16.14 92.11,15.62 92.26,15.31
          92.40,15.01 92.63,14.86 92.96,14.86
          92.96,14.86 97.32,14.86 97.32,14.86
          97.48,14.86 97.61,14.89 97.71,14.96
          97.83,15.02 97.93,15.14 98.00,15.29
          98.08,15.45 98.13,15.66 98.16,15.92
          98.20,16.19 98.22,16.50 98.22,16.87
          98.22,16.87 98.22,16.87 98.22,16.87 Z
        M 89.24,10.16
        C 89.24,10.64 89.22,11.02 89.20,11.33
          89.17,11.63 89.13,11.87 89.08,12.04
          89.03,12.21 88.96,12.33 88.87,12.39
          88.79,12.46 88.69,12.49 88.56,12.49
          88.45,12.49 88.33,12.47 88.20,12.43
          88.08,12.38 87.93,12.33 87.76,12.27
          87.60,12.22 87.43,12.18 87.23,12.14
          87.04,12.08 86.82,12.06 86.59,12.06
          86.32,12.06 86.04,12.12 85.77,12.23
          85.50,12.34 85.21,12.51 84.91,12.75
          84.63,12.98 84.32,13.30 84.00,13.69
          83.69,14.09 83.35,14.58 82.98,15.15
          82.98,15.15 82.98,26.13 82.98,26.13
          82.98,26.26 82.95,26.38 82.87,26.48
          82.79,26.57 82.65,26.65 82.46,26.72
          82.28,26.78 82.03,26.83 81.72,26.86
          81.41,26.90 81.01,26.92 80.53,26.92
          80.05,26.92 79.65,26.90 79.34,26.86
          79.03,26.83 78.78,26.78 78.58,26.72
          78.40,26.65 78.27,26.57 78.19,26.48
          78.11,26.38 78.08,26.26 78.08,26.13
          78.08,26.13 78.08,8.52 78.08,8.52
          78.08,8.39 78.11,8.28 78.17,8.19
          78.24,8.08 78.35,8.00 78.52,7.93
          78.69,7.87 78.91,7.82 79.17,7.79
          79.44,7.75 79.78,7.74 80.18,7.74
          80.59,7.74 80.94,7.75 81.21,7.79
          81.48,7.82 81.69,7.87 81.83,7.93
          81.99,8.00 82.10,8.08 82.17,8.19
          82.23,8.28 82.26,8.39 82.26,8.52
          82.26,8.52 82.26,10.71 82.26,10.71
          82.72,10.06 83.15,9.52 83.55,9.10
          83.95,8.66 84.33,8.32 84.70,8.07
          85.06,7.82 85.43,7.65 85.79,7.56
          86.15,7.45 86.52,7.40 86.88,7.40
          87.05,7.40 87.23,7.41 87.43,7.44
          87.62,7.45 87.82,7.49 88.03,7.54
          88.24,7.58 88.42,7.63 88.57,7.70
          88.73,7.75 88.84,7.81 88.91,7.87
          88.98,7.94 89.04,8.01 89.06,8.09
          89.10,8.17 89.13,8.28 89.16,8.43
          89.19,8.56 89.20,8.76 89.22,9.04
          89.23,9.31 89.24,9.69 89.24,10.16
          89.24,10.16 89.24,10.16 89.24,10.16 Z
        M 74.20,17.15
        C 74.20,18.65 74.00,20.02 73.61,21.25
          73.22,22.49 72.63,23.55 71.84,24.45
          71.05,25.34 70.06,26.03 68.86,26.52
          67.67,27.01 66.27,27.25 64.67,27.25
          63.13,27.25 61.78,27.03 60.64,26.60
          59.50,26.17 58.55,25.53 57.80,24.71
          57.04,23.88 56.49,22.86 56.12,21.65
          55.76,20.44 55.58,19.06 55.58,17.50
          55.58,16.00 55.77,14.64 56.16,13.40
          56.56,12.15 57.16,11.08 57.95,10.20
          58.74,9.31 59.73,8.62 60.91,8.13
          62.11,7.64 63.50,7.40 65.10,7.40
          66.66,7.40 68.01,7.62 69.15,8.05
          70.30,8.47 71.24,9.10 71.98,9.93
          72.73,10.75 73.29,11.77 73.65,12.98
          74.02,14.19 74.20,15.58 74.20,17.15
          74.20,17.15 74.20,17.15 74.20,17.15 Z
        M 69.15,17.35
        C 69.15,16.48 69.08,15.68 68.94,14.96
          68.81,14.22 68.58,13.58 68.26,13.04
          67.93,12.50 67.50,12.08 66.95,11.78
          66.42,11.48 65.74,11.33 64.93,11.33
          64.20,11.33 63.56,11.46 63.02,11.74
          62.47,12.00 62.02,12.40 61.67,12.93
          61.32,13.44 61.06,14.06 60.87,14.80
          60.71,15.52 60.62,16.35 60.62,17.29
          60.62,18.15 60.69,18.96 60.84,19.69
          60.98,20.42 61.21,21.05 61.52,21.59
          61.84,22.13 62.28,22.55 62.82,22.85
          63.37,23.14 64.04,23.28 64.85,23.28
          65.59,23.28 66.23,23.15 66.78,22.89
          67.32,22.61 67.77,22.22 68.12,21.71
          68.47,21.19 68.73,20.57 68.90,19.85
          69.07,19.11 69.15,18.28 69.15,17.35 Z
        M 51.74,26.13
        C 51.74,26.26 51.70,26.38 51.62,26.48
          51.54,26.57 51.41,26.65 51.21,26.72
          51.03,26.78 50.78,26.83 50.47,26.86
          50.16,26.90 49.76,26.92 49.28,26.92
          48.80,26.92 48.41,26.90 48.10,26.86
          47.78,26.83 47.53,26.78 47.34,26.72
          47.15,26.65 47.02,26.57 46.95,26.48
          46.87,26.38 46.83,26.26 46.83,26.13
          46.83,26.13 46.83,8.56 46.83,8.56
          46.83,8.43 46.87,8.32 46.95,8.23
          47.02,8.12 47.15,8.04 47.34,7.97
          47.53,7.89 47.78,7.83 48.10,7.79
          48.41,7.76 48.80,7.74 49.28,7.74
          49.76,7.74 50.16,7.76 50.47,7.79
          50.78,7.83 51.03,7.89 51.21,7.97
          51.41,8.04 51.54,8.12 51.62,8.23
          51.70,8.32 51.74,8.43 51.74,8.56
          51.74,8.56 51.74,26.13 51.74,26.13 Z
        M 52.11,-15.00
        C 52.11,-14.00 51.91,-13.31 51.50,-12.93
          51.10,-12.54 50.36,-12.35 49.26,-12.35
          48.16,-12.35 47.41,-12.54 47.02,-12.91
          46.65,-13.27 46.46,-13.94 46.46,-14.90
          46.46,-15.90 46.65,-16.59 47.04,-16.97
          47.45,-17.37 48.20,-17.56 49.30,-17.56
          50.39,-17.56 51.13,-17.37 51.52,-16.99
          51.91,-16.62 52.11,-15.96 52.11,-15.00
          52.11,-15.00 52.11,-15.00 52.11,-15.00 Z
        M 35.65,7.40
        C 34.57,7.40 33.53,7.66 32.53,8.19
          32.23,8.35 31.92,8.54 31.62,8.76
          31.62,8.76 31.62,12.99 31.62,12.99
          31.85,12.77 32.09,12.58 32.32,12.41
          32.95,11.95 33.58,11.72 34.21,11.72
          34.70,11.72 35.13,11.82 35.49,12.02
          35.87,12.20 36.17,12.47 36.41,12.83
          36.64,13.17 36.82,13.58 36.93,14.07
          37.06,14.56 37.13,15.23 37.13,16.08
          37.13,16.08 37.13,26.13 37.13,26.13
          37.13,26.26 37.17,26.38 37.25,26.48
          37.32,26.57 37.45,26.65 37.63,26.72
          37.82,26.78 38.06,26.83 38.38,26.86
          38.70,26.89 39.10,26.91 39.58,26.91
          40.05,26.91 40.44,26.89 40.75,26.86
          41.08,26.83 41.33,26.78 41.51,26.72
          41.69,26.65 41.82,26.57 41.90,26.48
          41.98,26.38 42.02,26.26 42.02,26.13
          42.02,26.13 42.02,15.25 42.02,15.25
          42.02,13.98 41.91,12.89 41.69,11.98
          41.47,11.07 41.10,10.28 40.60,9.61
          40.10,8.93 39.45,8.39 38.63,7.99
          37.82,7.60 36.83,7.40 35.65,7.40
          35.65,7.40 35.65,7.40 35.65,7.40 Z
        M 15.70,7.73
        C 15.23,7.73 14.84,7.76 14.51,7.79
          14.20,7.82 13.95,7.87 13.75,7.93
          13.57,8.00 13.44,8.08 13.36,8.19
          13.30,8.28 13.27,8.39 13.27,8.52
          13.27,8.52 13.27,19.30 13.27,19.30
          13.27,20.64 13.37,21.77 13.58,22.67
          13.80,23.57 14.16,24.36 14.65,25.04
          15.16,25.72 15.81,26.26 16.62,26.66
          17.43,27.05 18.44,27.25 19.64,27.25
          20.70,27.25 21.73,26.99 22.71,26.46
          23.63,25.98 24.53,25.27 25.42,24.34
          25.42,24.34 25.42,26.13 25.42,26.13
          25.42,26.26 25.46,26.38 25.54,26.48
          25.62,26.57 25.74,26.65 25.93,26.72
          26.12,26.78 26.37,26.83 26.69,26.86
          26.74,26.86 26.79,26.87 26.85,26.87
          26.88,26.88 26.91,26.88 26.94,26.88
          27.17,26.91 27.44,26.92 27.76,26.92
          27.78,26.92 27.79,26.92 27.81,26.92
          27.83,26.92 27.85,26.92 27.88,26.92
          28.36,26.92 28.75,26.89 29.06,26.86
          29.38,26.83 29.62,26.79 29.80,26.72
          29.82,26.72 29.83,26.71 29.84,26.71
          29.84,26.71 29.84,10.31 29.84,10.31
          29.84,10.31 29.84,8.53 29.84,8.53
          29.84,8.39 29.80,8.28 29.73,8.19
          29.65,8.09 29.52,8.00 29.34,7.93
          29.15,7.87 28.91,7.82 28.60,7.80
          28.52,7.78 28.43,7.78 28.35,7.77
          28.34,7.77 28.34,7.77 28.34,7.77
          28.32,7.77 28.31,7.77 28.29,7.77
          28.13,7.75 27.95,7.75 27.75,7.74
          27.68,7.74 27.60,7.74 27.52,7.74
          27.51,7.74 27.49,7.74 27.47,7.74
          27.45,7.74 27.43,7.74 27.41,7.74
          26.93,7.74 26.53,7.76 26.22,7.80
          25.91,7.82 25.66,7.87 25.46,7.94
          25.28,8.00 25.15,8.09 25.07,8.19
          25.01,8.29 24.97,8.40 24.97,8.53
          24.97,8.53 24.97,20.23 24.97,20.23
          24.26,21.11 23.58,21.78 22.95,22.24
          22.32,22.70 21.70,22.93 21.08,22.93
          20.58,22.93 20.15,22.84 19.77,22.66
          19.41,22.46 19.10,22.19 18.86,21.85
          18.62,21.49 18.45,21.07 18.33,20.58
          18.21,20.10 18.16,19.39 18.16,18.47
          18.16,18.47 18.16,8.53 18.16,8.53
          18.16,8.40 18.12,8.29 18.04,8.19
          17.96,8.09 17.82,8.00 17.63,7.94
          17.45,7.87 17.20,7.82 16.89,7.80
          16.58,7.76 16.18,7.74 15.70,7.74
          15.70,7.74 15.70,7.73 15.70,7.73 Z
        M 8.45,26.72
        C 8.45,28.10 8.34,29.22 8.10,30.07
          7.87,30.93 7.51,31.65 7.03,32.22
          6.56,32.82 5.97,33.26 5.26,33.55
          4.55,33.85 3.71,34.00 2.75,34.00
          2.21,34.00 1.76,33.96 1.38,33.88
          1.01,33.82 0.73,33.74 0.56,33.66
          0.40,33.59 0.28,33.49 0.21,33.37
          0.15,33.25 0.10,33.11 0.08,32.95
          0.05,32.81 0.03,32.64 0.02,32.44
          0.01,32.26 -0.00,32.01 -0.00,31.71
          -0.00,31.34 0.01,31.03 0.04,30.78
          0.05,30.55 0.08,30.36 0.14,30.21
          0.19,30.07 0.25,29.96 0.31,29.90
          0.38,29.83 0.46,29.80 0.56,29.80
          0.63,29.80 0.76,29.81 0.95,29.84
          1.16,29.88 1.38,29.90 1.62,29.90
          1.95,29.90 2.25,29.84 2.49,29.74
          2.74,29.63 2.94,29.46 3.10,29.22
          3.25,29.00 3.37,28.70 3.45,28.34
          3.53,27.98 3.56,27.41 3.56,26.62
          3.56,26.62 3.56,8.56 3.56,8.56
          3.56,8.43 3.60,8.32 3.68,8.23
          3.76,8.12 3.89,8.04 4.07,7.97
          4.25,7.89 4.50,7.83 4.81,7.79
          5.12,7.75 5.52,7.74 6.00,7.74
          6.48,7.74 6.88,7.75 7.19,7.79
          7.50,7.83 7.75,7.89 7.93,7.97
          8.12,8.04 8.26,8.12 8.34,8.23
          8.42,8.32 8.45,8.43 8.45,8.56
          8.45,8.56 8.45,26.72 8.45,26.72 Z
        M 8.82,-15.59
        C 8.82,-14.59 8.62,-13.90 8.22,-13.52
          7.83,-13.14 7.08,-12.95 5.98,-12.95
          4.89,-12.95 4.15,-13.13 3.76,-13.50
          3.37,-13.87 3.18,-14.53 3.18,-15.49
          3.18,-16.49 3.38,-17.18 3.78,-17.56
          4.18,-17.96 4.93,-18.15 6.02,-18.15
          7.12,-18.15 7.86,-17.96 8.24,-17.58
          8.63,-17.21 8.82,-16.55 8.82,-15.59
          8.82,-15.59 8.82,-15.59 8.82,-15.59 Z"
      />
    </svg>
  ),
}
