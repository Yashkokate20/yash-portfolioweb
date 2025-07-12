// Email utilities - will be enhanced with Supabase integration

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Temporary placeholder for email sending
// This will be replaced with Supabase Edge Function call
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // TODO: Replace with actual Supabase Edge Function call
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    
    // Simulate API call for now
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Log form data (remove in production)
    console.log('Contact form submission:', formData);
    
    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon."
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to send message. Please try again.",
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Email validation utility
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form validation utility
export const validateContactForm = (formData: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!formData.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!formData.message.trim()) {
    errors.push('Message is required');
  } else if (formData.message.length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};