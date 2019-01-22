import React    from 'preact'
import NextHead from 'next/head'
import Header   from './header'
import './style.global.sass'

export default function Layout(props) {
    return (
        <div className="next-page main-container">
            <NextHead>
                <title>WIC - Next.JS</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </NextHead>
            <Header />
            <section className="section main-content">
                {props.children}
            </section>
        </div>
    )
}
