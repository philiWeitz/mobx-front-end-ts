
echo ""

if [ "$NODE_ENV" == "production" ]
then
    echo "Start production server"
    yarn start
else
    echo "Start development server"
    yarn start-debug
fi