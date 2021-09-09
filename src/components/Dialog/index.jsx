import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button'
import './index.css'

export default class Dialog extends Component {
    constructor(props){
        super(props)
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
    }
    componentWillUnmount(){
        if(this.node){
            document.body.removeChild(this.node)
        }
    }
    getContentWidth(){
        const { width } = this.props
        let currentW = 'auto'
        if(width){
            const type = typeof width
            if(type === 'number'){
                let maxWidth = window && window.innerWidth
                currentW = maxWidth && maxWidth > width ? `${width}px`: 'auto'
            } else {
                let maxWidth = 100
                let current = Number.parseInt(width) || 0
                currentW = maxWidth > current ? width : 'auto'
            }
        } else {
            currentW = 'auto'
        }
        return currentW
    }
    render() {
        const { visible, title, width, content, children, type = 'default', onOk = () => {} , onCancel = () => {}, footers, ...others } = this.props
        return createPortal(
            <div className={'dialog-warpper'} style={{ display: visible ? 'block': 'none' }}>
                <div className={'dialog-container'} style={{ width: this.getContentWidth() }}>
                    { title && <div className={'header'}>{title}</div> }
                    <div className={'dialog-close-btn'} onClick={() => onCancel()}>X</div>
                    <div className={'body'}>
                        { type === 'confirm' ? content: children}
                    </div>
                    { footers === undefined ?
                        <div className={'footer'}>
                            <Button label={'确定'} onClick={() => onOk()}></Button>
                            <Button label={'取消'} onClick={() => onCancel()}></Button>
                        </div>: <div>
                            { footers.length ?
                                <div className={'footer'}>
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
