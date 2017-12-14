//添加静态数据路由
var app = express();
var homeData = require('../static/homeData.json');
var apiRoutes = express.Router();
apiRoutes.get('/homeData',function (req,res) {
  // res.json({
  //   errno : 0,
  //   data : homeData
  // })
  res.json(homeData)
});
// app.use('/api',apiRoutes);
app.use(apiRoutes);
