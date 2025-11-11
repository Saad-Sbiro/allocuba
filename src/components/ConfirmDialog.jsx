import React from 'react'
import { AlertTriangle, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './ConfirmDialog.css'

const ConfirmDialog = ({ message, onConfirm, onCancel, confirmText = null, cancelText = null }) => {
  const { t } = useLanguage()
  
  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog">
        <div className="confirm-dialog-header">
          <div className="confirm-dialog-icon">
            <AlertTriangle size={32} />
          </div>
          <button className="confirm-dialog-close" onClick={onCancel}>
            <X size={20} />
          </button>
        </div>
        <div className="confirm-dialog-content">
          <h3 className="confirm-dialog-title">{t('common.confirm')}</h3>
          <p className="confirm-dialog-message">{message}</p>
        </div>
        <div className="confirm-dialog-actions">
          <button className="btn btn-secondary confirm-dialog-cancel" onClick={onCancel}>
            {cancelText || t('confirmDialog.cancel')}
          </button>
          <button className="btn btn-primary confirm-dialog-confirm" onClick={onConfirm}>
            {confirmText || t('common.confirm')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog



