import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'

const Footer = () => {
	return (
		<div className={styles.container}>
			<div>©2023 SerEro. All rights reserved.</div>
			<div className={styles.social}>
				<Image className={styles.icon} src='/1.png' alt='facebook' width={25} height={25} />
				<Image className={styles.icon} src='/2.png' alt='instagram' width={25} height={25} />
				<Image className={styles.icon} src='/3.png' alt='twitter' width={25} height={25} />
				<Image className={styles.icon} src='/4.png' alt='youtube' width={25} height={25} />
			</div>
		</div>
	)
}

export default Footer