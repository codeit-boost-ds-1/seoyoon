import { useContext, useState } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import FoodForm from './FoodForm';
import useTranslate from '../hooks/useTranslate';
import './FoodList.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FoodListItem({ item, onEdit, onDelete }) {
  const { imgUrl, title, calorie, content, createdAt } = item;
  const locale = useContext(LocaleContext);

  const handleEditClick = () => {
    onEdit(item.id);
  };

  const handleDeleteClick = () => {
    onDelete(item.id);
  };
  
  const t = useTranslate();

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <div>{formatDate(createdAt)}</div>
      <button onClick={handleEditClick}>{t('edit button')}</button>
      <button onClick={handleDeleteClick}>{t('delete button')}</button>
    </div>
  );
}

function FoodList({ items, onUpdate, onUpdateSuccess, onDelete }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <ul className="FoodList">
      {items.map((item) => {
        if (item.id === editingId) {
          const { id, imgUrl, title, calorie, content } = item;
          const initialValues = { title, calorie, content, imgFile: null };

          const handleSubmit = (formData) => onUpdate(id, formData);

          const handleSubmitSuccess = (newItem) => {
            onUpdateSuccess(newItem);
            setEditingId(null);
          };

          return (
            <li key={item.id}>
              <FoodForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
                onCancel={handleCancel}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <FoodListItem
              item={item}
              onEdit={setEditingId}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FoodList;