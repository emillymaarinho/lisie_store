import styles from './Search.module.css'

const Search = ({ hendleOnChangeSearch }) => {
    return (
        <input className={styles.input_search} onChange={hendleOnChangeSearch} placeholder="Pesquise por produto..." type="text" />
    )
}

export default Search