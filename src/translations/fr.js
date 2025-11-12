export const fr = {
  // Common
  common: {
    welcome: 'Bienvenue',
    loading: 'Chargement...',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    next: 'Suivant',
    back: 'Retour',
    save: 'Enregistrer',
    delete: 'Supprimer',
    edit: 'Modifier',
    close: 'Fermer',
    search: 'Rechercher',
    filter: 'Filtrer',
    language: 'Langue'
  },

  // Splash Screen
  splash: {
    title: 'Allocuba',
    tagline: 'كسب طمأنينة، الماء فݣاع المدينة.'
  },

  // Sign Up
  signup: {
    title: 'Bienvenue',
    subtitle: 'Choisissez votre rôle',
    client: 'Client',
    driver: 'Livreur',
    firstName: 'Prénom',
    lastName: 'Nom',
    phone: 'Numéro de téléphone',
    driverId: 'ID Livreur',
    password: 'Mot de passe',
    start: 'Commencer',
    login: 'Se connecter',
    selectLanguage: 'Choisir la langue',
    language: 'Langue'
  },

  // Client Home
  clientHome: {
    greeting: 'Bonjour, {name}',
    greetingDefault: 'Bonjour',
    subtitle: 'Livraison d\'eau à votre porte',
    needWater: 'Besoin d\'eau ?',
    orderNow: 'Commandez maintenant et recevez votre livraison rapidement',
    orderButton: 'Commander de l\'eau',
    recentOrders: 'Mes commandes récentes',
    driversWithoutApp: 'Livreurs sans application',
    contactDirectly: 'Contactez ces livreurs directement par téléphone',
    deliveredBy: 'Livré par',
    status: {
      inProgress: 'En cours',
      delivered: 'Livrée'
    }
  },

  // Order Page
  order: {
    title: 'Nouvelle commande',
    quantity: 'Quantité d\'eau',
    waterType: 'Type d\'eau',
    deliveryAddress: 'Adresse de livraison',
    orderSummary: 'Résumé de la commande',
    confirmOrder: 'Confirmer la commande',
    tonnes: 'برميل',
    unitPrice: 'Prix unitaire',
    water: 'Eau',
    serviceFee: 'Frais de service',
    total: 'Total',
    estimatedDelivery: 'Livraison estimée',
    currentAddress: 'Adresse actuelle détectée',
    detectLocation: 'Détecter ma position',
    detecting: 'Détection...',
    chooseAddress: 'Choisir une autre adresse',
    interactiveMap: 'Carte interactive',
    currentLocation: 'Votre position actuelle sera utilisée',
    step1: 'Quantité & Type',
    step2: 'Adresse',
    step3: 'Résumé',
    orderConfirmed: 'Commande confirmée!',
    paymentMethod: 'Méthode de paiement',
    cod: 'Paiement à la livraison (COD)'
  },

  // Water Types
  waterTypes: {
    tantan: 'Eau de Tantan',
    filtered: 'Eau filtrée',
    pricePerTonne: '40 MAD / برميل',
    fixedFee: '+ 5 MAD frais (fixe)'
  },

  // Updates/Notifications
  updates: {
    title: 'Notifications',
    noNotifications: 'Aucune notification',
    viewOrder: 'Voir la commande',
    viewOrders: 'Voir les commandes',
    inRoute: 'Votre commande est en route',
    inRouteMessage: '{driver} a commencé la livraison de votre commande de {quantity} برميل d\'eau de Tantan. Arrivée estimée: {time}',
    delivered: 'Commande livrée',
    deliveredMessage: 'Votre commande de {quantity} برميل d\'eau filtrée a été livrée avec succès à votre adresse. Merci d\'avoir utilisé Allocuba!',
    confirmed: 'Commande confirmée',
    confirmedMessage: 'Votre commande de {quantity} برميل d\'eau de Tantan a été confirmée. Un livreur sera assigné sous peu.',
    driverAssigned: 'Livreur assigné',
    driverAssignedMessage: '{driver} a été assigné à votre commande. Il vous contactera avant la livraison.',
    timeAgo: {
      minutes: 'Il y a {count} minute',
      minutesPlural: 'Il y a {count} minutes',
      hours: 'Il y a {count} heure',
      hoursPlural: 'Il y a {count} heures',
      yesterday: 'Hier',
      days: 'Il y a {count} jour',
      daysPlural: 'Il y a {count} jours'
    }
  },

  // Profile
  profile: {
    title: 'Profil',
    name: '{firstName} {lastName}',
    role: 'Client',
    editProfile: 'Modifier le profil',
    personalInfo: 'Informations personnelles',
    phone: 'Téléphone',
    address: 'Adresse',
    addressValue: 'Laayoune, Maroc',
    orderHistory: 'Historique des commandes',
    settings: 'Paramètres',
    darkMode: 'Mode sombre',
    logout: 'Se déconnecter',
    logoutConfirm: 'Êtes-vous sûr de vouloir vous déconnecter ?',
    logoutConfirmText: 'Déconnecter',
    tonnes: 'tonnes'
  },

  // Edit Profile
  editProfile: {
    title: 'Modifier le profil',
    personalInfo: 'Informations personnelles',
    save: 'Enregistrer',
    saved: 'Profil mis à jour avec succès'
  },

  // Driver
  driver: {
    greeting: 'Commandes disponibles',
    subtitle: 'Choisissez une commande à livrer',
    availableOrders: 'Nouvelles commandes',
    activeDeliveries: 'Livraisons en cours',
    inRoute: 'En route',
    startDelivery: 'Démarrer la livraison',
    markDelivered: 'Marquer comme livrée',
    markDeliveredSuccess: 'Commande marquée comme livrée avec succès!',
    client: 'Client',
    distance: 'Distance',
    estimatedTime: 'Temps estimé',
    address: 'Adresse',
    phone: 'Téléphone',
    ordersMap: 'Carte des commandes',
    mapDescription: 'Carte interactive avec les positions des clients',
    mapHint: 'Les épingles bleues indiquent les commandes disponibles',
    tonnes: 'برميل',
    tonnesDelivered: 'tonnes livrées',
    reportIssue: 'Signaler un problème'
  },

  // Driver Report
  driverReport: {
    title: 'Signaler un problème',
    subtitle: 'Signaler un problème avec la commande de {clientName}',
    noAnswer: 'Client ne répond pas',
    noAnswerDesc: 'Le client ne répond pas au téléphone',
    wrongAddress: 'Adresse incorrecte',
    wrongAddressDesc: 'L\'adresse fournie est incorrecte',
    clientNotAvailable: 'Client non disponible',
    clientNotAvailableDesc: 'Le client n\'est pas disponible à l\'adresse',
    clientRefused: 'Client a refusé',
    clientRefusedDesc: 'Le client a refusé la commande',
    other: 'Autre problème',
    otherDesc: 'Autre problème non listé',
    additionalDetails: 'Détails supplémentaires',
    descriptionPlaceholder: 'Décrivez le problème en détail...',
    submit: 'Envoyer le rapport'
  },

  // Driver Updates
  driverUpdates: {
    title: 'Notifications',
    noNotifications: 'Aucune notification',
    viewOrders: 'Voir les commandes',
    urgent: 'Urgent',
    paymentDay: 'Paiement de la journée',
    paymentDayMessage: 'Veuillez vous rendre au bureau pour recevoir le paiement de votre journée. Montant: {amount} MAD',
    newOrderAvailable: 'Nouvelle commande disponible',
    newOrderMessage: 'Une nouvelle commande de {quantity} برميل est disponible près de votre position actuelle.',
    weeklyPaymentReminder: 'Rappel: Paiement hebdomadaire',
    weeklyPaymentMessage: 'N\'oubliez pas de venir au bureau demain pour recevoir votre paiement hebdomadaire.',
    deliveryCompleted: 'Livraison complétée',
    deliveryCompletedMessage: 'Vous avez complété {count} livraisons aujourd\'hui. Excellent travail!',
    importantMeeting: 'Important: Réunion demain',
    meetingMessage: 'Réunion obligatoire au bureau demain à {time}. Présence requise.',
    timeAgo: {
      minutes: 'Il y a {count} minute',
      minutesPlural: 'Il y a {count} minutes',
      hours: 'Il y a {count} heure',
      hoursPlural: 'Il y a {count} heures',
      yesterday: 'Hier',
      days: 'Il y a {count} jour',
      daysPlural: 'Il y a {count} jours'
    }
  },

  // Driver Profile
  driverProfile: {
    name: 'Ahmed B.',
    role: 'Livreur',
    editProfile: 'Modifier le profil',
    personalInfo: 'Informations personnelles',
    phone: 'Téléphone',
    deliveryZone: 'Zone de livraison',
    deliveryZoneValue: 'Laayoune, Maroc',
    recentDeliveries: 'Livraisons récentes',
    deliveryGoal: 'Objectif de livraisons',
    rewardMessage: 'Récompense: {amount} MAD pour {goal} livraisons',
    completed: 'complété',
    delivered: 'Livrées',
    remaining: 'Restantes',
    goal: 'Objectif',
    remainingMessage: '{count} livraisons restantes pour obtenir votre récompense de {amount} MAD',
    congratulations: 'Félicitations ! Vous avez atteint votre objectif !',
    tonnesDelivered: 'برميل livrées',
    darkMode: 'Mode sombre',
    logout: 'Se déconnecter',
    logoutConfirm: 'Êtes-vous sûr de vouloir vous déconnecter ?',
    logoutConfirmText: 'Déconnecter'
  },

  // Navigation
  navigation: {
    home: 'Accueil',
    orders: 'Commandes',
    notifications: 'Notifications',
    profile: 'Profil',
    settings: 'Paramètres'
  },

  // Settings
  settings: {
    title: 'Paramètres',
    appearance: 'Apparence',
    language: 'Langue',
    languageDescription: 'Choisissez votre langue préférée',
    darkMode: 'Mode sombre',
    darkModeDescription: 'Activer le thème sombre',
    themeColor: 'Couleur du thème',
    themeColorDescription: 'Personnalisez la couleur principale de l\'application',
    support: 'Support',
    contact: 'Contact',
    contactDescription: 'Besoin d\'aide? Contactez-nous',
    phoneNumber: 'Numéro de téléphone',
    phone: '+212 6XX XXX XXX',
    donation: 'Don',
    donationDescription: 'Soutenir le projet',
    donationPlace: 'Faire un don',
    about: 'À propos',
    version: 'Version 1.0.0'
  },

  // Donation Modal
  donationModal: {
    title: 'Faire un don',
    subtitle: 'Choisissez le montant que vous souhaitez donner pour soutenir notre application',
    selectAmount: 'Sélectionnez un montant',
    customAmount: 'Montant personnalisé',
    enterAmount: 'Entrez le montant',
    donationAmount: 'Montant du don',
    confirmDonation: 'Confirmer le don',
    successMessage: 'Merci pour votre don de {amount} MAD!'
  },

  // Confirm Dialog
  confirmDialog: {
    cancel: 'Annuler'
  }
}

