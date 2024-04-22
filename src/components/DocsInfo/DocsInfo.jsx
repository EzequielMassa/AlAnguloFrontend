import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './DocsInfo.css'
function DocsInfo() {
	const renderTooltip = (props) => (
		<Tooltip id='button-tooltip' {...props}>
			Vea la documentacion
		</Tooltip>
	)

	return (
		<OverlayTrigger
			placement='right'
			delay={{ show: 100, hide: 300 }}
			overlay={renderTooltip}>
			<Link
				className='docs_container'
				to={'https://github.com/EzequielMassa/AlAnguloFrontend'}
				target='_blank'
				rel='noopener noreferrer'>
				<FaGithub className='docs_icon' />
			</Link>
		</OverlayTrigger>
	)
}

export default DocsInfo
