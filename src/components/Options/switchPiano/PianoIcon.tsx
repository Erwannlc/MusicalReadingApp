import { FC } from "react";

const PianoIcon: FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 21C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H22ZM11 5H8.98486V13H7.98511V19H12V13H11V5ZM18.0151 19H22V5H19.0151V13H18.0151V19ZM17.0151 13H16.0151V5H14V13H13V19H17.0151V13ZM6.98511 19V13H5.98486V5H3L3 19H6.98511Z"
        fill="black"
      />
    </svg>
  )
};
/* const PianoIcon2 = () => {
  // $piano-icon-black: hsl(345, 6%, 13%);
  // $piano-icon-white: hsl(0, 0%, 100%);
  // $piano-icon-grey: hsl(220, 2%, 74%);
  return (
//  <!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
    <svg height="720pt" version="1.1" viewBox="0 0 720 720" width="720pt" xmlns="http://www.w3.org/2000/svg">
    // <svg
    // width="24"
    // height="24"
    // viewBox="0 0 24 24"
    // xmlns="http://www.w3.org/2000/svg"
    // >
      <path fill="#231f20" opacity="1.00" d=" M 109.54 36.83 C 116.65 35.74 123.87 36.04 131.04 36.00 C 285.70 36.00 440.37 36.00 595.03 36.00 C 619.29 35.31 643.51 46.35 658.79 65.22 C 670.52 79.35 677.05 97.63 676.99 115.99 C 677.01 276.66 676.99 437.33 677.00 598.00 C 677.41 621.20 667.06 644.28 649.44 659.39 C 635.10 671.96 616.12 679.05 597.05 678.99 C 438.37 679.00 279.69 679.00 121.01 678.99 C 102.86 679.06 84.80 672.67 70.72 661.22 C 52.14 646.37 40.86 622.89 41.01 599.09 C 40.99 438.39 41.01 277.69 41.00 116.99 C 40.74 98.53 47.09 80.07 58.77 65.76 C 71.25 50.18 89.77 39.60 109.54 36.83 M 81.28 78.25 C 71.67 88.29 66.10 102.08 66.18 115.99 C 66.17 239.63 66.18 363.27 66.18 486.91 C 66.29 506.86 65.95 526.83 66.34 546.77 C 65.95 563.85 66.29 580.95 66.17 598.05 C 65.95 610.36 70.01 622.71 77.58 632.43 C 87.53 645.48 103.58 653.66 120.01 653.80 C 146.00 653.80 171.99 653.78 197.98 653.81 C 198.02 633.21 197.99 612.62 197.99 592.03 C 198.01 530.35 198.00 468.68 198.00 407.00 C 187.76 406.74 176.92 408.26 167.39 403.61 C 161.59 401.00 155.91 395.82 156.00 388.99 C 155.99 279.73 156.01 170.46 155.99 61.20 C 144.00 61.21 132.00 61.19 120.01 61.21 C 105.50 61.35 91.23 67.72 81.28 78.25 M 258.01 61.20 C 257.98 170.46 258.02 279.73 257.99 388.99 C 258.10 396.09 252.01 401.33 245.98 403.90 C 237.53 407.83 228.04 406.90 219.00 407.00 C 219.00 468.68 218.99 530.35 219.01 592.03 C 219.00 612.62 218.98 633.21 219.02 653.80 C 254.89 653.72 290.78 653.95 326.65 653.68 C 334.35 653.92 342.06 653.60 349.76 653.49 L 350.05 652.80 C 349.92 632.55 350.05 612.29 349.99 592.03 C 350.01 530.36 350.00 468.68 350.00 407.00 C 339.99 406.73 329.43 408.22 320.03 403.90 C 314.00 401.34 307.95 396.12 308.00 389.05 C 307.99 279.76 308.02 170.48 307.99 61.20 C 291.33 61.20 274.67 61.20 258.01 61.20 M 410.01 61.20 C 409.98 170.46 410.02 279.73 409.99 388.99 C 410.14 394.98 405.59 399.85 400.64 402.57 C 391.68 407.85 380.98 406.99 371.00 407.00 C 371.00 468.68 370.99 530.36 371.01 592.03 C 371.01 612.60 370.96 633.18 371.03 653.75 C 378.36 653.76 385.72 654.10 393.01 653.21 C 399.63 654.14 406.33 653.69 413.00 653.80 C 442.99 653.81 472.98 653.78 502.97 653.81 C 503.03 633.22 502.99 612.62 502.99 592.03 C 503.01 530.35 503.00 468.68 503.00 407.00 C 493.66 406.84 483.85 407.96 475.10 403.93 C 469.04 401.37 462.93 396.13 463.00 389.02 C 462.99 279.74 463.02 170.47 462.99 61.20 C 445.33 61.21 427.67 61.20 410.01 61.20 M 565.01 61.20 C 564.99 168.81 565.01 276.42 565.00 384.03 C 564.91 387.54 565.46 391.31 563.74 394.54 C 561.05 399.97 555.45 403.22 549.90 405.08 C 541.56 407.90 532.64 406.76 524.00 407.00 C 524.00 468.68 523.99 530.35 524.01 592.03 C 524.00 612.62 523.98 633.21 524.01 653.80 C 549.02 653.78 574.03 653.83 599.04 653.77 C 621.16 653.29 641.83 637.84 648.82 616.89 C 652.91 606.03 651.63 594.30 651.82 582.96 C 651.71 570.89 652.04 558.82 651.66 546.76 C 652.05 520.51 651.71 494.21 651.82 467.94 C 651.82 355.29 651.82 242.64 651.82 129.99 C 651.70 119.66 652.67 109.01 649.14 99.07 C 642.54 77.99 622.15 62.19 600.05 61.27 C 588.37 61.11 576.69 61.25 565.01 61.20 Z" />
      <path fill="#ffffff" opacity="1.00" d=" M 81.28 78.25 C 91.23 67.72 105.50 61.35 120.01 61.21 C 132.00 61.19 144.00 61.21 155.99 61.20 C 156.01 170.46 155.99 279.73 156.00 388.99 C 155.91 395.82 161.59 401.00 167.39 403.61 C 176.92 408.26 187.76 406.74 198.00 407.00 C 198.00 468.68 198.01 530.35 197.99 592.03 C 181.33 591.96 164.67 592.02 148.00 592.00 C 139.99 591.94 131.91 592.34 123.98 590.99 C 105.00 588.04 87.08 577.85 75.48 562.45 C 71.73 557.66 69.03 552.19 66.34 546.77 C 65.95 526.83 66.29 506.86 66.18 486.91 C 66.18 363.27 66.17 239.63 66.18 115.99 C 66.10 102.08 71.67 88.29 81.28 78.25 Z" />
      <path fill="#ffffff" opacity="1.00" d=" M 258.01 61.20 C 274.67 61.20 291.33 61.20 307.99 61.20 C 308.02 170.48 307.99 279.76 308.00 389.05 C 307.95 396.12 314.00 401.34 320.03 403.90 C 329.43 408.22 339.99 406.73 350.00 407.00 C 350.00 468.68 350.01 530.36 349.99 592.03 C 306.33 591.97 262.67 591.98 219.01 592.03 C 218.99 530.35 219.00 468.68 219.00 407.00 C 228.04 406.90 237.53 407.83 245.98 403.90 C 252.01 401.33 258.10 396.09 257.99 388.99 C 258.02 279.73 257.98 170.46 258.01 61.20 Z" />
      <path fill="#ffffff" opacity="1.00" d=" M 410.01 61.20 C 427.67 61.20 445.33 61.21 462.99 61.20 C 463.02 170.47 462.99 279.74 463.00 389.02 C 462.93 396.13 469.04 401.37 475.10 403.93 C 483.85 407.96 493.66 406.84 503.00 407.00 C 503.00 468.68 503.01 530.35 502.99 592.03 C 459.00 591.99 415.00 591.97 371.01 592.03 C 370.99 530.36 371.00 468.68 371.00 407.00 C 380.98 406.99 391.68 407.85 400.64 402.57 C 405.59 399.85 410.14 394.98 409.99 388.99 C 410.02 279.73 409.98 170.46 410.01 61.20 Z" />
      <path fill="#ffffff" opacity="1.00" d=" M 565.01 61.20 C 576.69 61.25 588.37 61.11 600.05 61.27 C 622.15 62.19 642.54 77.99 649.14 99.07 C 652.67 109.01 651.70 119.66 651.82 129.99 C 651.82 242.64 651.82 355.29 651.82 467.94 C 651.71 494.21 652.05 520.51 651.66 546.76 C 646.04 559.48 637.16 570.80 625.55 578.55 C 615.26 585.58 603.22 589.97 590.86 591.43 C 584.60 592.20 578.29 591.97 572.00 592.00 C 556.00 592.02 540.01 591.96 524.01 592.03 C 523.99 530.35 524.00 468.68 524.00 407.00 C 532.64 406.76 541.56 407.90 549.90 405.08 C 555.45 403.22 561.05 399.97 563.74 394.54 C 565.46 391.31 564.91 387.54 565.00 384.03 C 565.01 276.42 564.99 168.81 565.01 61.20 Z"/>
      <path fill="#bcbdbf" opacity="1.00" d=" M 66.34 546.77 C 69.03 552.19 71.73 557.66 75.48 562.45 C 87.08 577.85 105.00 588.04 123.98 590.99 C 131.91 592.34 139.99 591.94 148.00 592.00 C 164.67 592.02 181.33 591.96 197.99 592.03 C 197.99 612.62 198.02 633.21 197.98 653.81 C 171.99 653.78 146.00 653.80 120.01 653.80 C 103.58 653.66 87.53 645.48 77.58 632.43 C 70.01 622.71 65.95 610.36 66.17 598.05 C 66.29 580.95 65.95 563.85 66.34 546.77 Z" />
      <path fill="#bcbdbf" opacity="1.00" d=" M 625.55 578.55 C 637.16 570.80 646.04 559.48 651.66 546.76 C 652.04 558.82 651.71 570.89 651.82 582.96 C 651.63 594.30 652.91 606.03 648.82 616.89 C 641.83 637.84 621.16 653.29 599.04 653.77 C 574.03 653.83 549.02 653.78 524.01 653.80 C 523.98 633.21 524.00 612.62 524.01 592.03 C 540.01 591.96 556.00 592.02 572.00 592.00 C 578.29 591.97 584.60 592.20 590.86 591.43 C 603.22 589.97 615.26 585.58 625.55 578.55 Z" />
      <path fill="#bcbdbf" opacity="1.00" d=" M 219.01 592.03 C 262.67 591.98 306.33 591.97 349.99 592.03 C 350.05 612.29 349.92 632.55 350.05 652.80 C 345.94 652.79 341.82 652.72 337.72 652.37 C 333.95 651.92 330.36 653.39 326.65 653.68 C 290.78 653.95 254.89 653.72 219.02 653.80 C 218.98 633.21 219.00 612.62 219.01 592.03 Z" />
      <path fill="#bcbdbf" opacity="1.00" d=" M 371.01 592.03 C 415.00 591.97 459.00 591.99 502.99 592.03 C 502.99 612.62 503.03 633.22 502.97 653.81 C 472.98 653.78 442.99 653.81 413.00 653.80 C 406.33 653.69 399.63 654.14 393.01 653.21 C 385.72 654.10 378.36 653.76 371.03 653.75 C 370.96 633.18 371.01 612.60 371.01 592.03 Z" />
    </svg>
  )
}; */

export default PianoIcon;