function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const countdown = async () => {
    let i = 1;
    while (i <= 18) {
        switch(i) {
            case 18:
                console.log(
                    '%cYingmoYang%cv0.1.8',
                    'display: inline-block;background-color:rgba(66,66,66,1);color:#fff;margin-bottom:6px;padding:4px;border-radius:4px 0 0 4px',
                    'display: inline-block;background-color:rgba(0,180,0,1);color:#fff;padding:4px;border-radius:0 4px 4px 0',
                    ''
                );
                break
            case 12:
                console.log(
                    '%cYingmoYang%cv0.1.2',
                    'display: inline-block;background-color:rgba(66,66,66,1);color:#fff;margin-bottom:6px;padding:4px;border-radius:4px 0 0 4px',
                    'display: inline-block;background-color:rgba(0,180,0,1);color:#fff;padding:4px;border-radius:0 4px 4px 0',
                    ''
                );
                await sleep(100);
                console.log(`%c Welcome to TFLS!`, `
                        font-size:1.5em;
                        font-family: Comic Sans MS; 
                        color: #fff;
                        background:linear-gradient(to right,red,blue)
                        `);
                break
            case 10:
                console.log(
                    '%cYingmoYang%cv0.1.0',
                    'display: inline-block;background-color:rgba(66,66,66,1);color:#fff;margin-bottom:6px;padding:4px;border-radius:4px 0 0 4px',
                    'display: inline-block;background-color:rgba(0,180,0,1);color:#fff;padding:4px;border-radius:0 4px 4px 0',
                    ''
                );
                await sleep(100);
                console.log(`%cYou are out of Beta
%c欢迎进入0.1.0版本`, `
                        font-size:1.5em;
                        font-family: Comic Sans MS; 
                        color: #fff;
                        `,
                        `
                        font-size:1.5em;
                        font-family: Comic Sans MS; 
                        color: #fff;
                        `);
                break
            default:
                console.log(i);
        }

        await sleep(1000);
        i = i + 1;
    }
    console.log(`%c
                            _  _
                   |_|  /| |_)|_)\\_/
                   | | /-| |  |   /
               _     _ ___     _
              |_) | |_) |  |_|| \\  /| \\_/
              |_) | | \\ |  | ||_/ /-|  /

                               .--------.
                             .: : :  :___\`.
                           .'!!:::::  \\\\_\\ \`.
                      : . /\%\O\!\!\::::::::\\\\_\\. \\
                     [\"\"]/\%\%O!!:::::::::  : . \\
                     |  |\%\%OO!!::::::::::: : . |
                     |  |\%\%OO!!:::::::::::::  :|
                     |  |\%\%OO!!!::::::::::::: :|
            :       .'--\`.\%\%OO!!!:::::::::::: :|
          : .:     /\`.__.'\\\%\%OO!!!::::::::::::/
         :    .   /        \\\%OO!!!!::::::::::/
        ,-'\`\`'-. ;          ;\%\%OO!!!!!!:::::'
        |\`-..-'| |   ,--.   |\`\%\%\%OO!!!!!!:'
        | .   :| |_.','\`.\`._|  \`\%\%\%OO!\%\%'
        | . :  | |--'    \`--|    \`\%\%\%\%'
        |\`-..-'| ||   | | | |     /__\\\`-.
        \\::::::/ ||)|/|)|)|\\|           /
---------\`::::'--|._ ~**~ _.|----------( -----------------------
           )(    |  \`-..-'  |           \\    ______
           )(    |          |,--.       ____/ /  /\\\\ ,-._.-'
        ,-')('-. |          |\\\`;/   .-()___  :  |\`.!,-'\`'/\`-._
       (  '  \`  )\`-._    _.-'|;,|    \`-,    \\_\\__\\\`,-'>-.,-._
        \`-....-'     \`\`\`\`    \`--'      \`-._       (\`- \`-._\`-.   

    `, 'color: cyan');
    await sleep(1000);
}

const welcomeMsg = async () => {
    console.log(`%c『待你空闲时…』`, `
            font-size:2em;
            font-family: Baskerville, "Times New Roman", "Liberation Serif", STFangsong, FangSong, FangSong_GB2312, "CWTEX\-F", serif;
            color: #fff;
            background: linear-gradient(to right,red,blue)
            `);
    sleep(3000)
    console.log(`%c『今日独自走在孤云阁岸边，沿途拾来数枚星螺。
    曾听说它内藏玄妙，能传递言语，试着凑近耳边，却听不见任何说话声，惟有空洞的风。
    无妨。
    邪祟的忿恨，劫难的预兆…还有你的呼唤。能听见这些，对我足矣。
    待你空闲时，再与我说说吧，你从星螺中听见过什么。』`, `
            font-size:2em;
            font-family: Comic Sans MS; 
            color: #fff;
            `);
}

const upgradeNotice = () => {
    console.log(`%cv0.1.8-alpha
%cUpgrade Notice:
%cThis release contains upgrade notes that deviate from the norm:
    ℹ️ You are out of childhood
    ⚠️ You need to take criminal responsibilities
%cChangelog:
%c    Added new scope: Driver License can now be acquired by taking 科目二 and 科目三.
    Added new domain: University
%cDeprecated:
%c    Identity as Children
%cFuture Milestones to 填:
%c    2 years before legal marriage
    TFLS Wiki
    Martin's house's Super Inter-continent Datacenter
    Hand draft a power bank
    3D print a vase for 李静
    Upload Yellow Books
    Upgrade Dell's Notebook case
    Traffik Voov/Tencent Meeting
`, `
font-size:2em;
font-family: Comic Sans MS; 
color: cyan;
font-weight: bold;
line-height: 2em;
`,
`
font-size:1.7em;
font-family: Comic Sans MS; 
font-weight: bold;
line-height: 2em;
`,
`
font-size:1.3em;
font-family: Comic Sans MS; 
line-height: 2em;
`,
`
font-size:1.7em;
font-family: Comic Sans MS; 
font-weight: bold;
line-height: 2em;
`,
`
font-size:1.3em;
font-family: Comic Sans MS; 
line-height: 2em;
`,
`
font-size:1.7em;
font-family: Comic Sans MS; 
font-weight: bold;
line-height: 2em;
`,
`
font-size:1.3em;
font-family: Comic Sans MS; 
line-height: 2em;
`,
`
font-size:1.7em;
font-family: Comic Sans MS; 
font-weight: bold;
line-height: 2em;
`,
`
font-size:1.3em;
font-family: Comic Sans MS; 
line-height: 2em;
`);
}

const reactions = (i) => {
    switch(i) {
        case 1:
            console.log("%c🎉 1 Dr. has reacted", `
            font-size:1.5em;
            `);
            console.log(`%c恭喜杨镕兆同志成年！*呱唧呱唧* 
终于变成了能轻轻松松开房的人呢！（什）
总之就是一句话 生日快乐！
（蹭不到生日蛋糕吃好不爽哦（你）`, `
font-size:1.5em;
`);
            break
        case 2:
            console.log("%c🎉 1 🥳 1 Dr. and Martin have reacted", `
            font-size:1.5em;
            `);
            console.log(`%c愿你崭新的时光通透温热。`, `
            font-size:1.5em;
            `);
            break
        case 3:    
            console.log("%c🎉 1 🥳 1 🙀 1 Dr., Martin, and Holger have reacted", `
            font-size:1.5em;
            `);
            console.log(`%c热烈庆祝杨镕兆儿同学顺利迈入成年人的世界🎉`, `
            font-size:1.5em;
            `);
            break
        case 4:
            console.log("%c🎉 1 🥳 1 🙀 1 🫠 1 Dr., Martin, Holger, and 朵儿老师 have reacted", `
            font-size:1.5em;
            `);
            console.log(`%cCook 老师生日快乐！
感谢Cook老师！
您之于英解就像Cook之于苹果（？）
总而言之成年快乐！`, `
font-size:1.5em;
`)
            break
    }
    

}

async function projectMohorovicic () {
    await countdown();
    await sleep(1000)
    await welcomeMsg();
    await sleep(5000)
    await upgradeNotice();
    await sleep(10000)
    let i = 1;
    while ( i <=4 ) {
        await reactions(i);
        await sleep(3000);
        console.clear();
        upgradeNotice();
        i = i+1;
    }
    console.log('%cHappy birthday🍰','font-size: 5em');
    
}