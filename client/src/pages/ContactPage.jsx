import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      // Handle response
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name', { required: true })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name && <span>Name is required</span>}

      <button type="submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}