#!/bin/sh
npm run build
rm -rf ../maps-backend/build
cp -r build ../maps-backend/
