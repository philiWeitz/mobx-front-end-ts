
echo ""

if [ "$NODE_ENV" == "production" ]
then
    echo "Start production server"
    npm run start
else
    echo "Start development server"
    npm run start-debug
fi
