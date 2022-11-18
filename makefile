run:
	cd container && npm run start  &
	 cd counter && BROWSER=none npm run start &
	 cd header && BROWSER=none npm run start