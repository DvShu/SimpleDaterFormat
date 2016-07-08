# SimpleDateFormat

这是一个js中的日期格式化的工具类,用于把long型的时间戳格式化为指定的规则字符。

---
## 使用
### 1.引入js文件
``` javascript
<!-- 引入js文件 -->
<script src="./js/SimpleDateFormat.js"></script>
```
### 2.调用
```javascript
// 初始化日期格式化工具类,参数为需要格式化的规则,如果不传默认为yyyy-MM-dd
var sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
console.log(sdf.format(1467615249000)); // 调用format进行格式化, 注意日期为13位哦，否则可能会出现结果不对
// format方法也可以传入pattern, 例如sdf.format(1467615249000, "yyyy-MM-dd")
```
## 详细说明
### 首先是构造一个格式化工具对象
``` javascript
// 初始化日期格式化工具类,参数为需要格式化的规则,如果不传默认为yyyy-MM-dd
var sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
```
这里可以选择传递参数,也可以选择不传参数，如果不传参数则默认的格式化规则为 **yyyy-MM-dd**。
### format
``` javascript
sdf.format(1467615249000);
```
调用该方法将传入的时间戳格式化为指定的规则字符串进行返回。这个方法，允许接受两个参数，第一个参数为时间戳；第2个参数为格式化规则，如果不填，则默认使用创建**SimpleDateFormat**的时候构建的规则。
> 注意：需要格式化的时间戳为13位长度的时间戳，否则年份将会变为从1970年开始。
