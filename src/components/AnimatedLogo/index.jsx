import React from 'react'
import { Container } from './styles'

export function AnimatedLogo() {
	return (
		<Container>
			<div className="content">
				<div className="line"></div>

				<div className="content-logo">
					<svg
						width="43"
						height="48"
						viewBox="0 0 43 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z"
							fill="#065E7C"
						/>
					</svg>

					<svg
						width="252"
						height="42"
						viewBox="0 0 252 42"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.1152 32.7178H4.16797V8.55957C4.16797 6.87793 4.49609 5.46289 5.15234 4.31445C5.82227 3.15234 6.75879 2.27734 7.96191 1.68945C9.17871 1.08789 10.6211 0.787109 12.2891 0.787109C12.8359 0.787109 13.3623 0.828125 13.8682 0.910156C14.374 0.978516 14.8662 1.06738 15.3447 1.17676L15.2832 5.62695C15.0234 5.55859 14.75 5.51074 14.4629 5.4834C14.1758 5.45605 13.8408 5.44238 13.458 5.44238C12.7471 5.44238 12.1387 5.56543 11.6328 5.81152C11.1406 6.04395 10.7646 6.39258 10.5049 6.85742C10.2451 7.32227 10.1152 7.88965 10.1152 8.55957V32.7178ZM14.5449 10.5283V14.7119H0.866211V10.5283H14.5449ZM16.6982 21.8486V21.418C16.6982 19.791 16.9307 18.2939 17.3955 16.9268C17.8604 15.5459 18.5371 14.3496 19.4258 13.3379C20.3145 12.3262 21.4082 11.54 22.707 10.9795C24.0059 10.4053 25.4961 10.1182 27.1777 10.1182C28.8594 10.1182 30.3564 10.4053 31.6689 10.9795C32.9814 11.54 34.082 12.3262 34.9707 13.3379C35.873 14.3496 36.5566 15.5459 37.0215 16.9268C37.4863 18.2939 37.7188 19.791 37.7188 21.418V21.8486C37.7188 23.4619 37.4863 24.959 37.0215 26.3398C36.5566 27.707 35.873 28.9033 34.9707 29.9287C34.082 30.9404 32.9883 31.7266 31.6895 32.2871C30.3906 32.8477 28.9004 33.1279 27.2188 33.1279C25.5371 33.1279 24.04 32.8477 22.7275 32.2871C21.4287 31.7266 20.3281 30.9404 19.4258 29.9287C18.5371 28.9033 17.8604 27.707 17.3955 26.3398C16.9307 24.959 16.6982 23.4619 16.6982 21.8486ZM22.6045 21.418V21.8486C22.6045 22.7783 22.6865 23.6465 22.8506 24.4531C23.0146 25.2598 23.2744 25.9707 23.6299 26.5859C23.999 27.1875 24.4775 27.6592 25.0654 28.001C25.6533 28.3428 26.3711 28.5137 27.2188 28.5137C28.0391 28.5137 28.7432 28.3428 29.3311 28.001C29.9189 27.6592 30.3906 27.1875 30.7461 26.5859C31.1016 25.9707 31.3613 25.2598 31.5254 24.4531C31.7031 23.6465 31.792 22.7783 31.792 21.8486V21.418C31.792 20.5156 31.7031 19.668 31.5254 18.875C31.3613 18.0684 31.0947 17.3574 30.7256 16.7422C30.3701 16.1133 29.8984 15.6211 29.3105 15.2656C28.7227 14.9102 28.0117 14.7324 27.1777 14.7324C26.3438 14.7324 25.6328 14.9102 25.0449 15.2656C24.4707 15.6211 23.999 16.1133 23.6299 16.7422C23.2744 17.3574 23.0146 18.0684 22.8506 18.875C22.6865 19.668 22.6045 20.5156 22.6045 21.418ZM40.4053 21.8486V21.418C40.4053 19.791 40.6377 18.2939 41.1025 16.9268C41.5674 15.5459 42.2441 14.3496 43.1328 13.3379C44.0215 12.3262 45.1152 11.54 46.4141 10.9795C47.7129 10.4053 49.2031 10.1182 50.8848 10.1182C52.5664 10.1182 54.0635 10.4053 55.376 10.9795C56.6885 11.54 57.7891 12.3262 58.6777 13.3379C59.5801 14.3496 60.2637 15.5459 60.7285 16.9268C61.1934 18.2939 61.4258 19.791 61.4258 21.418V21.8486C61.4258 23.4619 61.1934 24.959 60.7285 26.3398C60.2637 27.707 59.5801 28.9033 58.6777 29.9287C57.7891 30.9404 56.6953 31.7266 55.3965 32.2871C54.0977 32.8477 52.6074 33.1279 50.9258 33.1279C49.2441 33.1279 47.7471 32.8477 46.4346 32.2871C45.1357 31.7266 44.0352 30.9404 43.1328 29.9287C42.2441 28.9033 41.5674 27.707 41.1025 26.3398C40.6377 24.959 40.4053 23.4619 40.4053 21.8486ZM46.3115 21.418V21.8486C46.3115 22.7783 46.3936 23.6465 46.5576 24.4531C46.7217 25.2598 46.9814 25.9707 47.3369 26.5859C47.7061 27.1875 48.1846 27.6592 48.7725 28.001C49.3604 28.3428 50.0781 28.5137 50.9258 28.5137C51.7461 28.5137 52.4502 28.3428 53.0381 28.001C53.626 27.6592 54.0977 27.1875 54.4531 26.5859C54.8086 25.9707 55.0684 25.2598 55.2324 24.4531C55.4102 23.6465 55.499 22.7783 55.499 21.8486V21.418C55.499 20.5156 55.4102 19.668 55.2324 18.875C55.0684 18.0684 54.8018 17.3574 54.4326 16.7422C54.0771 16.1133 53.6055 15.6211 53.0176 15.2656C52.4297 14.9102 51.7188 14.7324 50.8848 14.7324C50.0508 14.7324 49.3398 14.9102 48.752 15.2656C48.1777 15.6211 47.7061 16.1133 47.3369 16.7422C46.9814 17.3574 46.7217 18.0684 46.5576 18.875C46.3936 19.668 46.3115 20.5156 46.3115 21.418ZM78.1602 27.8779V1.21777H84.1074V32.7178H78.7549L78.1602 27.8779ZM64.1328 21.8896V21.459C64.1328 19.7637 64.3242 18.2256 64.707 16.8447C65.0898 15.4502 65.6504 14.2539 66.3887 13.2559C67.127 12.2578 68.0361 11.4854 69.1162 10.9385C70.1963 10.3916 71.4268 10.1182 72.8076 10.1182C74.1064 10.1182 75.2412 10.3916 76.2119 10.9385C77.1963 11.4854 78.0303 12.2646 78.7139 13.2764C79.4111 14.2744 79.9717 15.457 80.3955 16.8242C80.8193 18.1777 81.127 19.6611 81.3184 21.2744V22.2178C81.127 23.7627 80.8193 25.1982 80.3955 26.5244C79.9717 27.8506 79.4111 29.0127 78.7139 30.0107C78.0303 30.9951 77.1963 31.7607 76.2119 32.3076C75.2275 32.8545 74.0791 33.1279 72.7666 33.1279C71.3857 33.1279 70.1553 32.8477 69.0752 32.2871C68.0088 31.7266 67.1064 30.9404 66.3682 29.9287C65.6436 28.917 65.0898 27.7275 64.707 26.3604C64.3242 24.9932 64.1328 23.5029 64.1328 21.8896ZM70.0391 21.459V21.8896C70.0391 22.8057 70.1074 23.6602 70.2441 24.4531C70.3945 25.2461 70.6338 25.9502 70.9619 26.5654C71.3037 27.167 71.7412 27.6387 72.2744 27.9805C72.8213 28.3086 73.4844 28.4727 74.2637 28.4727C75.2754 28.4727 76.1094 28.2471 76.7656 27.7959C77.4219 27.3311 77.9209 26.6953 78.2627 25.8887C78.6182 25.082 78.8232 24.1523 78.8779 23.0996V20.4131C78.8369 19.5518 78.7139 18.7793 78.5088 18.0957C78.3174 17.3984 78.0303 16.8037 77.6475 16.3115C77.2783 15.8193 76.8135 15.4365 76.2529 15.1631C75.7061 14.8896 75.0566 14.7529 74.3047 14.7529C73.5391 14.7529 72.8828 14.9307 72.3359 15.2861C71.7891 15.6279 71.3447 16.0996 71.0029 16.7012C70.6748 17.3027 70.4287 18.0137 70.2646 18.834C70.1143 19.6406 70.0391 20.5156 70.0391 21.459ZM109.394 33.1279C107.671 33.1279 106.126 32.8545 104.759 32.3076C103.392 31.7471 102.229 30.9746 101.272 29.9902C100.329 29.0059 99.6045 27.8643 99.0986 26.5654C98.5928 25.2529 98.3398 23.8584 98.3398 22.3818V21.5615C98.3398 19.8799 98.5791 18.3418 99.0576 16.9473C99.5361 15.5527 100.22 14.3428 101.108 13.3174C102.011 12.292 103.104 11.5059 104.39 10.959C105.675 10.3984 107.124 10.1182 108.737 10.1182C110.31 10.1182 111.704 10.3779 112.921 10.8975C114.138 11.417 115.156 12.1553 115.977 13.1123C116.811 14.0693 117.439 15.2178 117.863 16.5576C118.287 17.8838 118.499 19.3604 118.499 20.9873V23.4482H100.862V19.5107H112.695V19.0596C112.695 18.2393 112.545 17.5078 112.244 16.8652C111.957 16.209 111.52 15.6895 110.932 15.3066C110.344 14.9238 109.592 14.7324 108.676 14.7324C107.896 14.7324 107.227 14.9033 106.666 15.2451C106.105 15.5869 105.647 16.0654 105.292 16.6807C104.95 17.2959 104.69 18.0205 104.513 18.8545C104.349 19.6748 104.267 20.5771 104.267 21.5615V22.3818C104.267 23.2705 104.39 24.0908 104.636 24.8428C104.896 25.5947 105.258 26.2441 105.723 26.791C106.201 27.3379 106.775 27.7617 107.445 28.0625C108.129 28.3633 108.901 28.5137 109.763 28.5137C110.829 28.5137 111.82 28.3086 112.736 27.8984C113.666 27.4746 114.466 26.8389 115.136 25.9912L118.007 29.1084C117.542 29.7783 116.906 30.4209 116.1 31.0361C115.307 31.6514 114.35 32.1572 113.229 32.5537C112.107 32.9365 110.829 33.1279 109.394 33.1279ZM126.62 10.5283L130.291 17.2754L134.064 10.5283H140.36L134.085 21.377L140.647 32.7178H134.331L130.332 25.5811L126.333 32.7178H120.017L126.579 21.377L120.304 10.5283H126.62ZM149.138 14.7939V41.249H143.231V10.5283H148.707L149.138 14.7939ZM163.186 21.377V21.8076C163.186 23.4209 162.994 24.918 162.611 26.2988C162.242 27.6797 161.695 28.8828 160.971 29.9082C160.246 30.9199 159.344 31.7129 158.264 32.2871C157.197 32.8477 155.967 33.1279 154.572 33.1279C153.219 33.1279 152.043 32.8545 151.045 32.3076C150.047 31.7607 149.206 30.9951 148.522 30.0107C147.853 29.0127 147.312 27.8574 146.902 26.5449C146.492 25.2324 146.178 23.8242 145.959 22.3203V21.1924C146.178 19.5791 146.492 18.1025 146.902 16.7627C147.312 15.4092 147.853 14.2402 148.522 13.2559C149.206 12.2578 150.04 11.4854 151.024 10.9385C152.022 10.3916 153.191 10.1182 154.531 10.1182C155.939 10.1182 157.177 10.3848 158.243 10.918C159.323 11.4512 160.226 12.2168 160.95 13.2148C161.688 14.2129 162.242 15.4023 162.611 16.7832C162.994 18.1641 163.186 19.6953 163.186 21.377ZM157.259 21.8076V21.377C157.259 20.4336 157.177 19.5654 157.013 18.7725C156.862 17.9658 156.616 17.2617 156.274 16.6602C155.946 16.0586 155.509 15.5938 154.962 15.2656C154.429 14.9238 153.779 14.7529 153.014 14.7529C152.207 14.7529 151.517 14.8828 150.942 15.1426C150.382 15.4023 149.924 15.7783 149.568 16.2705C149.213 16.7627 148.946 17.3506 148.769 18.0342C148.591 18.7178 148.481 19.4902 148.44 20.3516V23.2021C148.509 24.2139 148.7 25.123 149.015 25.9297C149.329 26.7227 149.814 27.3516 150.471 27.8164C151.127 28.2812 151.988 28.5137 153.055 28.5137C153.834 28.5137 154.49 28.3428 155.023 28.001C155.557 27.6455 155.987 27.1602 156.315 26.5449C156.657 25.9297 156.896 25.2188 157.033 24.4121C157.184 23.6055 157.259 22.7373 157.259 21.8076ZM173.091 1.21777V32.7178H167.164V1.21777H173.091ZM177.028 21.8486V21.418C177.028 19.791 177.261 18.2939 177.726 16.9268C178.19 15.5459 178.867 14.3496 179.756 13.3379C180.645 12.3262 181.738 11.54 183.037 10.9795C184.336 10.4053 185.826 10.1182 187.508 10.1182C189.189 10.1182 190.687 10.4053 191.999 10.9795C193.312 11.54 194.412 12.3262 195.301 13.3379C196.203 14.3496 196.887 15.5459 197.352 16.9268C197.816 18.2939 198.049 19.791 198.049 21.418V21.8486C198.049 23.4619 197.816 24.959 197.352 26.3398C196.887 27.707 196.203 28.9033 195.301 29.9287C194.412 30.9404 193.318 31.7266 192.02 32.2871C190.721 32.8477 189.23 33.1279 187.549 33.1279C185.867 33.1279 184.37 32.8477 183.058 32.2871C181.759 31.7266 180.658 30.9404 179.756 29.9287C178.867 28.9033 178.19 27.707 177.726 26.3398C177.261 24.959 177.028 23.4619 177.028 21.8486ZM182.935 21.418V21.8486C182.935 22.7783 183.017 23.6465 183.181 24.4531C183.345 25.2598 183.604 25.9707 183.96 26.5859C184.329 27.1875 184.808 27.6592 185.396 28.001C185.983 28.3428 186.701 28.5137 187.549 28.5137C188.369 28.5137 189.073 28.3428 189.661 28.001C190.249 27.6592 190.721 27.1875 191.076 26.5859C191.432 25.9707 191.691 25.2598 191.855 24.4531C192.033 23.6465 192.122 22.7783 192.122 21.8486V21.418C192.122 20.5156 192.033 19.668 191.855 18.875C191.691 18.0684 191.425 17.3574 191.056 16.7422C190.7 16.1133 190.229 15.6211 189.641 15.2656C189.053 14.9102 188.342 14.7324 187.508 14.7324C186.674 14.7324 185.963 14.9102 185.375 15.2656C184.801 15.6211 184.329 16.1133 183.96 16.7422C183.604 17.3574 183.345 18.0684 183.181 18.875C183.017 19.668 182.935 20.5156 182.935 21.418ZM207.585 15.3682V32.7178H201.679V10.5283H207.236L207.585 15.3682ZM214.271 10.3848L214.168 15.8604C213.881 15.8193 213.532 15.7852 213.122 15.7578C212.726 15.7168 212.363 15.6963 212.035 15.6963C211.201 15.6963 210.477 15.8057 209.861 16.0244C209.26 16.2295 208.754 16.5371 208.344 16.9473C207.947 17.3574 207.646 17.8564 207.441 18.4443C207.25 19.0322 207.141 19.7021 207.113 20.4541L205.924 20.085C205.924 18.6494 206.067 17.3301 206.354 16.127C206.642 14.9102 207.059 13.8506 207.605 12.9482C208.166 12.0459 208.85 11.3486 209.656 10.8564C210.463 10.3643 211.386 10.1182 212.425 10.1182C212.753 10.1182 213.088 10.1455 213.43 10.2002C213.771 10.2412 214.052 10.3027 214.271 10.3848ZM226.862 33.1279C225.14 33.1279 223.595 32.8545 222.228 32.3076C220.86 31.7471 219.698 30.9746 218.741 29.9902C217.798 29.0059 217.073 27.8643 216.567 26.5654C216.062 25.2529 215.809 23.8584 215.809 22.3818V21.5615C215.809 19.8799 216.048 18.3418 216.526 16.9473C217.005 15.5527 217.688 14.3428 218.577 13.3174C219.479 12.292 220.573 11.5059 221.858 10.959C223.144 10.3984 224.593 10.1182 226.206 10.1182C227.778 10.1182 229.173 10.3779 230.39 10.8975C231.606 11.417 232.625 12.1553 233.445 13.1123C234.279 14.0693 234.908 15.2178 235.332 16.5576C235.756 17.8838 235.968 19.3604 235.968 20.9873V23.4482H218.331V19.5107H230.164V19.0596C230.164 18.2393 230.014 17.5078 229.713 16.8652C229.426 16.209 228.988 15.6895 228.4 15.3066C227.812 14.9238 227.061 14.7324 226.145 14.7324C225.365 14.7324 224.695 14.9033 224.135 15.2451C223.574 15.5869 223.116 16.0654 222.761 16.6807C222.419 17.2959 222.159 18.0205 221.981 18.8545C221.817 19.6748 221.735 20.5771 221.735 21.5615V22.3818C221.735 23.2705 221.858 24.0908 222.104 24.8428C222.364 25.5947 222.727 26.2441 223.191 26.791C223.67 27.3379 224.244 27.7617 224.914 28.0625C225.598 28.3633 226.37 28.5137 227.231 28.5137C228.298 28.5137 229.289 28.3086 230.205 27.8984C231.135 27.4746 231.935 26.8389 232.604 25.9912L235.476 29.1084C235.011 29.7783 234.375 30.4209 233.568 31.0361C232.775 31.6514 231.818 32.1572 230.697 32.5537C229.576 32.9365 228.298 33.1279 226.862 33.1279ZM245.237 15.3682V32.7178H239.331V10.5283H244.889L245.237 15.3682ZM251.923 10.3848L251.82 15.8604C251.533 15.8193 251.185 15.7852 250.774 15.7578C250.378 15.7168 250.016 15.6963 249.688 15.6963C248.854 15.6963 248.129 15.8057 247.514 16.0244C246.912 16.2295 246.406 16.5371 245.996 16.9473C245.6 17.3574 245.299 17.8564 245.094 18.4443C244.902 19.0322 244.793 19.7021 244.766 20.4541L243.576 20.085C243.576 18.6494 243.72 17.3301 244.007 16.127C244.294 14.9102 244.711 13.8506 245.258 12.9482C245.818 12.0459 246.502 11.3486 247.309 10.8564C248.115 10.3643 249.038 10.1182 250.077 10.1182C250.405 10.1182 250.74 10.1455 251.082 10.2002C251.424 10.2412 251.704 10.3027 251.923 10.3848Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</Container>
	)
}
