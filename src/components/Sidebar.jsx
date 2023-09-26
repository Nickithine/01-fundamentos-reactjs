import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={ styles.sidebar }>
      <img 
        className={ styles.cover } 
        src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
      />
      
      <div className={ styles.profile }>
        <strong>Dominique Ithina</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}