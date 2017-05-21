import { connect } from 'react-redux'
import { fetchExplore } from '../modules/explore'

import Explore from '../components/ExploreView'

const mapDispatchtoProps = {
  fetchExplore,
}

const mapStateToProps = (state) => ({
  explore: state.explore
})

export default connect(mapStateToProps, mapDispatchtoProps)(Explore)
