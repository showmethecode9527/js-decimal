/*!
 * js 浮点数计算不精确的问题
 * @author wangk 2017-03-22T16:27:55+0800
 */
;(function () {
    function add(flag) {

    }
    /**
     * 加法
     * @author wangk 2017-03-22T14:59:39+0800
     * @return {Number} [description]
     * @example
     *     var a = 0.1, b = 0.2;
     *
     *     console.log(a + b);          // 0.30000000000000004
     *     console.log(a.add(b));       // 0.3
     *
     *     console.log(a + b + 0.03);   // 0.33000000000000007
     *     console.log(a.add(b, 0.03)); // 0.33
     */
    Number.prototype.add = function () {
        console.time();

        var fractionalPartSize = 0,
            argStr = '',
            sum = 0,
            multiple = 1,
            argAry = [this]; // 参数数组
        [].forEach.call(arguments, function (arg) {
            argAry.push(arg);
            argStr = arg.toString();
            // 如果有小数
            if (argStr.indexOf('.') !== -1) {
                fractionalPartSize = Math.max(fractionalPartSize, argStr.split('.')[1].length);
            }
        });

        fractionalPartSize = Math.max(fractionalPartSize, this);
        multiple = Math.pow(10, fractionalPartSize + 1);

        argAry.forEach(function (num) {
            sum += num * multiple;
        });

        console.timeEnd();
        return sum / multiple;
    };

    /**
     * 减法
     * @author wangk 2017-03-22T15:42:59+0800
     * @return {Number} [description]
     * @example
     *     var a = 0.7, b = 0.3;
     *
     *     console.log(a - b);         // 0.39999999999999997
     *     console.log(a.sub(b));      // 0.4
     *
     *     console.log(a - b - 0.1);   // 0.29999999999999993
     *     console.log(a.sub(b, 0.1)); // 0.3
     */
    Number.prototype.sub = function () {
        console.time();

        var fractionalPartSize = 0,
            argStr = '',
            sum = 0,
            multiple = 1,
            argAry = [this]; // 参数数组
        [].forEach.call(arguments, function (arg) {
            argAry.push(0 - arg);
            argStr = arg.toString();
            // 如果有小数
            if (argStr.indexOf('.') !== -1) {
                fractionalPartSize = Math.max(fractionalPartSize, argStr.split('.')[1].length);
            }
        });

        fractionalPartSize = Math.max(fractionalPartSize, this);
        multiple = Math.pow(10, fractionalPartSize + 1);

        argAry.forEach(function (num) {
            sum += num * multiple;
        });

        console.timeEnd();
        return sum / multiple;
    };

    Number.prototype.multiply = function () {
        // todo
    };

    Number.prototype.divide = function () {
        // todo
    };

} ());
