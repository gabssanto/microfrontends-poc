run:
	cd container && npm run start  &
	 cd counter && BROWSER=none npm run start &
	 cd store && BROWSER=none npm run start &
	 cd header && BROWSER=none npm run start &
	 cd footer && BROWSER=none npm run start