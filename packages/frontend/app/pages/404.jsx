import Page from "../templates/Page"
import PageNotFound from "../templates/PageNotFound/PageNotFound"

const NotFoundPage = () => (
  <Page title="Nie znaleziono strony">
    <PageNotFound />
  </Page>
)

export default NotFoundPage
