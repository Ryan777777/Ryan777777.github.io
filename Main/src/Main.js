/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' 



class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2019, 1, 1) 
        }, 1000
        )
        var audio = document.getElementById("audio");
        audio.loop = true;
        setTimeout(() => audio.play(), 2000) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了:
                <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 
                分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        // const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
        // const textStyle = 'text-mobile';

        return (
        
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <p></p>
                    <h1 style={{ fontWeight: 500 }}>给小林同学的一封信！</h1>                

                    <p>今天是我们三周年纪念日，从2019年1月1日到现在，时间过的真的好快，我们也一起经历和走过了很多很多事情。
                        有开心的，有难过的，互相分享着最快乐的时刻，中间也分分合合好多次，
                        不过最后我们都能原谅对方。现在我们一起为了以后更好的生活一起努力着。</p>

                    <p>记得2018年的那个暑假，我们机缘巧合下一起去听了周杰伦的演唱会。刚在车站见面的时候，
                        我觉得这个女生怎么有点高冷，一句话都不说 (现在发现我们家小林其实是个话唠，哈哈哈)。
                        那天我们一起吃饭，聊天，我发现你是一个很开朗的人，就是性格有一点慢热。 我还记得你当时晕车的样子，整个人迷迷糊糊的很是可爱。
                        演唱会之后的第二天，因为你要回家，所以很早就走了。我当时还在睡觉，迷迷糊糊中听到走廊里一阵行李箱在地上滚过的声音，我当时还在想，
                        哎，这个女生还让不让人睡觉了，大早上的叮叮当当的，所以当时对你就有很深的印象。
                        </p>

                    <p>假期过去之后，你回到了学校，我也回了美国。我们开始了为期半年的网聊生活。最开始你还是很高冷，对我爱答不理的, 你可能是觉得这个人好奇怪。
                        但是随着聊天越来越多，越来越了解，我发现我渐渐喜欢上了你。那个寒假我特意买了回国的机票，想当面跟你表白，因为我觉得微信里表白有一点不正式(其实是怕被你拒绝)。
                        当时寒假只有不到20天，我们横跨了半个地球，但是我还是想回去见你一下，给我自己一个机会。之后的事情你也知道，家里发生了点事情，计划赶不上变化，
                        所以我不得不在1月1号那天半夜把你约出来，不然第二天你就要飞走了。
                        那天晚上我们约在了学校的操场上，在零下十多度的冷风中聊了好久，走了好久，我还记着当时表白的场景，现在想起来还是觉得惨不忍睹。而且那天确实把你冻坏了，现在想想，这种奇葩的表白方式，
                        我也是独一份了。以后你每次肚子疼，
                        我都觉得是我那时候带你在外面几个小时冻到的，怪我当时太着急了。</p>

                    <p>再之后我们就开始了漫长的异国恋，这个真的很难。每天只能靠煲电话来关心和了解彼此的生活，我们也经历了很多分分合合，吵吵闹闹。
                        刚开始的时候我们都不是很成熟，虽然很甜，但是都给了对方太大的压力。每天有聊不完的话，但是很多时候也是像做任务一样去完成。
                        现在通过时间的不断的磨合，我们也渐渐找到了一个两个人都很舒服的恋爱方式，这可能就是我们都在适应对方的一个过程。我们都在变的越来越好。在这段异国恋期间，
                        我们也经历了很多生活上的不容易，比如考试，毕业，找工作，甚至是亲人的离开，还有各种人生的大起大落。我很庆幸你能一直陪在我的身边，我也陪在你身边，一起度过了这段难忘的时光。我希望我们可以继续这样走下去，向着我们的目标共同前进。</p>
                        <p>最后的最后，我想说的是，我可能不是一个善于表达或是会甜言蜜语的人，我写了这么多，也就是想要表达 “我爱你” 这简单的三个字，
                        很期待以后结束异地的生活，也希望那一天可以早点到来。</p>


                    <p>最后祝小林三周年纪念日快乐！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的老张</p>
                        <p>2022年1月1日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>
            // </div>
        )
    }
}
export default Main