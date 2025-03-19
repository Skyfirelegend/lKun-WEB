import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React, { useEffect, useState, useRef } from 'react';
import 'github-markdown-css/github-markdown.css';

import { Anchor } from 'antd';

const md1 = `
## 计费说明
本章节主要介绍 AI 算力平台在使用中所产生的计费项以及对应的计费模式等。
### 计费项

在使用 AI 算力平台的过程中，主要产生费用的项目包括**计算资源费用**和**存储资源费用**。

| **计费项**   | **说明**                                                     |
| :----------- | :----------------------------------------------------------- |
| 计费资源     | 根据用户所选计算资源的类型、规格、数量以及计算资源的使用时长进行收费。<br>支持按照用户申请的资源规格和时长，采用**按需计费**方式，按小时扣费。<br>支持按月/年预留资源的**包年包月计费方式**，可享受更优惠价格，适合中长期稳定 IT 需求。 |
| 并行文件存储 | 按申请容量进行收费。最低不低于 10GB，最高为 100TB。          |



### 计费模式

AI 算力平台支持**包年/包月**和**按需计费**两种模式。

| **计费模式** | **说明**                                                     | **适用场景**                                                 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 包年/包月    | **计费方式**为月或年。用户需要按照购买时长（月或年）一次性支付所选时长的费用。在购买时长期间内，用户可以一直使用该资源。 | 适用于长期稳定需求，价格比按需计费模式更优惠，帮助用户更大程度的节约成本。 |
| 按需计费     | **计费方式**为小时。<br>按小时计费，按小时扣费，且不设最低消费指标，用户可以随时启用和删除资源。<br>若资源实际使用时长不足 1 小时，将按1小时扣费。 | 适用于有较大波动且无法准确预测资源需求量的业务场景，或临时性和突发性的资源需求场景。 |

`

const item = [
    {
        key: 'jifeixiang',
        href: '#jfx',
        title: '计费项',
    },
    {
        key: 'jifeimoshi',
        href: '#jfms',
        title: '计费模式',
    }
]

const Cost = () => {
    // const topRef = React.useRef(null);
    // const [targetOffset, setTargetOffset] = useState();
    // useEffect(() => {
    //     setTargetOffset(topRef.current?.clientHeight);
    //     console.log(topRef.current?.clientHeight);
    // }, []);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <div
                style={{
                    width: '100%'
                }}
            >
                <ReactMarkdown
                    children={md1}
                    // children={mdContent}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                />
            </div>
            {/* <div>251518</div> */}
            <div
                style={{
                    marginTop: '1vw',
                    marginLeft: '0.9vw',
                    top: '0',
                    bottom: '0',
                    // overflowY: 'auto',
                    position: 'sticky',
                    zIndex: '2',
                }}
            >
                <div
                    style={{
                        marginBottom: '0.5vw',
                        fontWeight: '600'
                    }}
                >
                    本页目录
                </div>
                <Anchor
                    // targetOffset={targetOffset}
                    items={item}
                />
            </div>
        </div>

    )
}

export default Cost;
