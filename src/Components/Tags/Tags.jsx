import {theme} from '../../Theme/Theme'
const Tags = ({name})=> {
    const style = {
        backgroundColor: `${theme.colors.backgroundTypes[name]}`
    }
    console.log(theme.colors.backgroundTypes[name],'color')
    return(
        <p style={style}>{name}</p>
    )
}
export default Tags