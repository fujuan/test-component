import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import  styles from './index.module.less'
export default class Dialog extends Component {
    constructor(props){
        super(props)
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
        this.width = 'auto'
    }
    componentDidMount() {
        this.getContentWidth()
    }

    componentWillUnmount(){
        if(this.node){
            document.body.removeChild(this.node)
        }
    }
    getContentWidth(){
        const { width } = this.props
        if(width){
            const type = typeof width
            if(type === 'number'){
                let maxWidth = window && window.innerWidth
                this.width = maxWidth && maxWidth > width ? `${width}px`: 'auto'
            } else {
                let maxWidth = 100
                let current = Number.parseInt(width) || 0
                this.width = maxWidth > current ? width : 'auto'
            }
        }
    }
    render() {
        const { visible, title, width, children, onOk = () => {} , onCancel = () => {}, footers, ...others } = this.props
        return createPortal(
            <div className={styles['dialog-warpper']} style={{ display: visible ? 'block': 'none' }}>
                <div className={styles['dialog-container']} style={{ width: this.width }}>
                    { title && <div className={styles['header']}>{title}</div> }
                    <div className={styles['dialog-close-btn']} onClick={() => onCancel()}>X</div>
                    <div className={styles['body']}>
                        {children}
                    </div>
                    { footers === undefined ?
                        <div className={styles['footer']}>
                            <button onClick={() => onOk()}>确定</button>
                            <button onClick={() => onCancel()}>取消</button>
                        </div>: <div>
                            { footers.length ?
                                <div className={styles['footer']}>
                                    { footers.map((item, index) => {
                                        return <div key={index}>{item}</div>
                                    })}
                                </div>: null
                            }
                        </div>
                    }
                </div>
            </div>
            , this.node)
    }
}
