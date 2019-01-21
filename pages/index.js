import { Component } from 'preact'
import { connect }   from 'preact-redux'
import Layout        from '../components/layout'

class Index extends Component {
    render() {
        return (
            <Layout>
                <section className="section">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr,  sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita
                    kasd gubergren, no sea takimata sanctus est Lorem ipsum
                    dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr,  sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet.</p>

                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat.</p>

                    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore
                    eu feugiat nulla facilisis at vero eros et accumsan et
                    iusto odio dignissim qui blandit praesent luptatum zzril
                    delenit augue duis dolore te feugait nulla facilisi.</p>
                </section>
            </Layout>
        )
    }
}

export default connect()(Index)
