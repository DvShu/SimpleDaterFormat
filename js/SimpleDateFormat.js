/**
 * 日期格式化工具类
 * Created by haoran.shu on 2016/6/17.
 */
var SimpleDateFormat = function (pattern) {
    var rule = "yyyy-MM-dd"; // 默认的格式为：yyyy-MM-dd
    if (pattern) {
        rule = pattern;
    }
    var date = new Date(); // 构造一个日期
    // 格式化的方法
    this.format = function Format(time, pattern) {
        if (pattern) {
            rule = pattern;
        }
        date.setTime(time); // 设置时间戳
        var last = "", lastIndex = "", timeStr = "", timeNumber;
        for (var i = 0, length = rule.length; i < length; i++) {
            if (i == 0) {
                last = rule[i]; // 初始化规则字符
                lastIndex = i; // 初始化规则字符位置
            } else if (i == length - 1) {
                if (rule[i] != last) {
                    timeStr += last; // 拼接上一个规则
                }
                // 再拼接下面的规则
                timeNumber = getTimeNumber(rule[i], (i - lastIndex + 1)); // 获取解析的时间数字
                if (timeNumber == -1) {
                    timeStr = "INVALID_PATTERN"; // 不能解析的规则
                    break; // 跳出循环
                } else {
                    timeStr += timeNumber; // 拼接日期
                }
            } else {
                // 如果当前规则,和上一次规则不一样,表明一组规则完成,需要解析日期
                if (rule[i] != last) {
                    timeNumber = getTimeNumber(last, (i - lastIndex)); // 获取解析的时间数字
                    if (timeNumber == -1) {
                        timeStr = "INVALID_PATTERN"; // 不能解析的规则
                        break; // 跳出循环
                    } else {
                        timeStr += timeNumber; // 拼接日期
                    }
                    // 重置规则字符及位置
                    last = rule[i];
                    lastIndex = i;
                }
            }
        }
        return timeStr;
    };

    // 解析获取日期数字
    function getTimeNumber(r, length) {
        switch (r) {
            case 'y': // 年
                if (length == 2) {
                    // 如果规则里的年的规则有两个,则显示年份的最后两位数字
                    return getFullDate(date.getFullYear() % 100);
                } else if (length == 4) {
                    return getFullDate(date.getFullYear());
                }
                return -1;
            case 'M': // 月
                if (length == 2) {
                    return getFullDate(date.getMonth() + 1);
                }
                return -1;
            case 'd': // 日
                if (length == 2) {
                    return getFullDate(date.getDate());
                }
                return -1;
            case 'h': // 时
                if (length == 2) {
                    return getFullDate(date.getHours());
                }
                return -1;
            case 'm': // 分
                if (length == 2) {
                    return getFullDate(date.getMinutes());
                }
                return -1;
            case 's': // 秒
                if (length == 2) {
                    return getFullDate(date.getSeconds());
                }
                return -1;
            case 'S': // 毫秒
                return date.getMilliseconds();
            default: // 如果没有匹配到规则,则返回分隔符
                return r;
        }
    }

    function getFullDate(dateint) {
        if(dateint >= 10) {
            return dateint;
        } else {
            return "0" + dateint;
        }
    }
};