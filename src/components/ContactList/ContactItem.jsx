import css from './ContactList.module.css';

export const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li className={css.listItem}>
      {name}: {number}
      <button
        className={css.contactsListBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};