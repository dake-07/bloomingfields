import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SignatureCanvas from 'react-signature-canvas';
import emailjs from '@emailjs/browser';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const SupportAgreementForm = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const sigCanvas = useRef({});

    const [formData, setFormData] = useState({
        farmerName: '',
        phoneNumber: '',
        address: 'Asamankese',
        cashSupport: '',
        collateralConsent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const nextStep = () => {
        // Validation per step
        if (step === 1) {
            if (!formData.farmerName || !formData.phoneNumber || !formData.address || !formData.cashSupport) {
                setError('Please fill out all required fields.');
                return;
            }
        }
        if (step === 2) {
            if (!formData.collateralConsent) {
                setError('You must agree to the collateral terms to proceed.');
                return;
            }
        }

        setError('');
        setStep(prev => prev + 1);
    };

    const prevStep = () => {
        setError('');
        setStep(prev => prev - 1);
    };

    const clearSignature = () => {
        sigCanvas.current.clear();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (sigCanvas.current.isEmpty()) {
            setError('Please provide your digital signature.');
            return;
        }

        setIsSubmitting(true);
        setError('');

        const signatureDataUrl = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');

        const templateParams = {
            farmer_name: formData.farmerName,
            phone_number: formData.phoneNumber,
            address: formData.address,
            cash_support: formData.cashSupport,
            signature_image: signatureDataUrl,
            // Include consent confirmation
            collateral_consent: formData.collateralConsent ? 'AGREED' : 'NOT AGREED'
        };

        try {
            const serviceId = 'service_ln64mhc';
            const templateId = 'template_0yfj7qh';
            const publicKey = 'Q583w3-QZyGxBtBaP';

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            console.log('Form submission payload:', templateParams);
            setIsSuccess(true);
        } catch (err) {
            setError('There was an error submitting your agreement. Please try again.');
            console.error('EmailJS Error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card bg-surface flex-column items-center text-center"
                style={{ maxWidth: '600px', margin: 'var(--space-2xl) auto', padding: 'var(--space-2xl) var(--space-md)' }}
            >
                <CheckCircle size={64} className="text-accent" style={{ marginBottom: 'var(--space-md)' }} />
                <h2 className="text-primary">Agreement Submitted!</h2>
                <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: 'var(--space-lg)' }}>
                    Thank you, {formData.farmerName}. Your request for GH₵ {formData.cashSupport} has been securely submitted.
                    Our team will review your agreement and contact you through {formData.phoneNumber} shortly.
                </p>
                <button
                    onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                        setFormData({ farmerName: '', phoneNumber: '', address: 'Asamankese', cashSupport: '', collateralConsent: false });
                    }}
                    className="btn btn-primary"
                >
                    Submit Another Application
                </button>
            </motion.div>
        );
    }

    return (
        <section id="agreement-portal" className="section-padding bg-background w-full">
            <div className="container" style={{ maxWidth: '700px' }}>
                <div className="text-center" style={{ marginBottom: 'var(--space-lg)' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary"
                    >
                        Input Support Agreement
                    </motion.h2>
                    <p className="text-muted">Digital portal for fast and secure support applications.</p>
                </div>

                <div className="card bg-surface" style={{ padding: 'var(--space-xl)' }}>

                    {/* Progress Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xl)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '4px', backgroundColor: 'var(--color-background)', zIndex: 0, transform: 'translateY(-50%)' }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: 0, width: `${(step - 1) * 50}%`, height: '4px', backgroundColor: 'var(--color-primary)', zIndex: 0, transform: 'translateY(-50%)', transition: 'width 0.3s ease' }}></div>

                        {[1, 2, 3].map(item => (
                            <div
                                key={item}
                                style={{
                                    width: '32px', height: '32px', borderRadius: '50%',
                                    backgroundColor: step >= item ? 'var(--color-primary)' : 'var(--color-background)',
                                    color: step >= item ? 'white' : 'var(--color-text-muted)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    zIndex: 1, fontWeight: 'bold', border: `2px solid ${step >= item ? 'var(--color-primary)' : 'var(--color-background)'}`
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    {error && (
                        <div style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-md)', fontSize: '0.9rem' }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>

                        {/* STEP 1: Personal Details */}
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h3 className="text-primary" style={{ marginBottom: 'var(--space-md)' }}>1. Applicant Details</h3>

                                <div className="form-group">
                                    <label htmlFor="farmerName">Full Name *</label>
                                    <input
                                        type="text" id="farmerName" name="farmerName"
                                        value={formData.farmerName} onChange={handleChange}
                                        placeholder="e.g. Kwame Mensah" required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number (MTN Mobile Money preferred) *</label>
                                    <input
                                        type="tel" id="phoneNumber" name="phoneNumber"
                                        value={formData.phoneNumber} onChange={handleChange}
                                        placeholder="024 XXX XXXX" required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Residential Address *</label>
                                    <input
                                        type="text" id="address" name="address"
                                        value={formData.address} onChange={handleChange} required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cashSupport">Requested Cash Support (GH₵) *</label>
                                    <input
                                        type="number" id="cashSupport" name="cashSupport"
                                        value={formData.cashSupport} onChange={handleChange}
                                        placeholder="e.g. 1500" min="100" required
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Legal Terms & Collateral */}
                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h3 className="text-primary" style={{ marginBottom: 'var(--space-md)' }}>2. Terms of Support</h3>

                                <div style={{ backgroundColor: 'rgba(45,90,39,0.05)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-lg)' }}>
                                    <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Repayment Terms</h4>
                                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-text-main)', fontSize: '0.95rem' }}>
                                        <li style={{ marginBottom: '0.5rem' }}>
                                            <strong>Deadline:</strong> Full repayment of the requested GH₵ {formData.cashSupport || '[Amount]'} is due no later than <strong style={{ color: '#d97706' }}>31st October, 2026</strong>.
                                        </li>
                                        <li>
                                            <strong>Default Penalty:</strong> A late payment penalty of <strong style={{ color: '#b91c1c' }}>10% per month</strong> will be applied to any outstanding balance after the deadline.
                                        </li>
                                    </ul>
                                </div>

                                <div className="checkbox-group" style={{
                                    display: 'flex', alignItems: 'flex-start', gap: '1rem',
                                    padding: 'var(--space-sm) 0', borderTop: '1px solid rgba(0,0,0,0.1)'
                                }}>
                                    <input
                                        type="checkbox" id="collateralConsent" name="collateralConsent"
                                        checked={formData.collateralConsent} onChange={handleChange}
                                        style={{ marginTop: '0.25rem', width: '20px', height: '20px', accentColor: 'var(--color-primary)' }}
                                    />
                                    <label htmlFor="collateralConsent" style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: 1.5, cursor: 'pointer' }}>
                                        <strong>Collateral Agreement:</strong> I hereby acknowledge and consent that my harvest proceeds and/or my cocoa farm(s) shall serve as collateral for this input support. In the event of default, Blooming Fields Agriservices reserves the right to recover the owed amount through these assets.
                                    </label>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Signature */}
                        {step === 3 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h3 className="text-primary" style={{ marginBottom: 'var(--space-md)' }}>3. Digital Signature</h3>
                                <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: 'var(--space-md)' }}>
                                    By signing below, you, <strong>{formData.farmerName}</strong>, agree to the stated terms and conditions of this Input Support Agreement.
                                </p>

                                <div style={{ border: '2px dashed rgba(45,90,39,0.3)', borderRadius: 'var(--radius-md)', padding: '0.5rem', backgroundColor: '#fff', marginBottom: 'var(--space-sm)' }}>
                                    <SignatureCanvas
                                        ref={sigCanvas}
                                        penColor="black"
                                        canvasProps={{
                                            width: 500, height: 200,
                                            className: 'sigCanvas',
                                            style: { width: '100%', height: '200px', cursor: 'crosshair', touchAction: 'none' }
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'var(--space-lg)' }}>
                                    <button type="button" onClick={clearSignature} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.875rem' }}>
                                        Clear Signature
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-xl)', paddingTop: 'var(--space-md)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                            {step > 1 ? (
                                <button type="button" className="btn btn-secondary" onClick={prevStep} style={{ padding: '0.75rem 1.5rem' }}>
                                    <ArrowLeft size={18} /> Back
                                </button>
                            ) : <div></div>} {/* Empty div to keep 'Next' aligned right */}

                            {step < 3 ? (
                                <button type="button" className="btn btn-primary" onClick={nextStep} style={{ padding: '0.75rem 1.5rem' }}>
                                    Next <ArrowRight size={18} />
                                </button>
                            ) : (
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ padding: '0.75rem 2rem', fontWeight: 'bold' }}>
                                    {isSubmitting ? 'Submitting...' : 'Sign & Complete'}
                                </button>
                            )}
                        </div>

                    </form>
                </div>
            </div>

            <style>{`
                .form-group {
                    margin-bottom: 1.5rem;
                    text-align: left;
                }
                .form-group label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--color-secondary);
                    font-size: 0.95rem;
                }
                .form-group input {
                    width: 100%;
                    padding: 0.875rem;
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: var(--radius-sm);
                    font-family: inherit;
                    font-size: 1rem;
                    transition: border-color 0.2s, box-shadow 0.2s;
                    background-color: var(--color-background);
                }
                .form-group input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(45,90,39,0.1);
                    background-color: white;
                }
            `}</style>
        </section>
    );
};

export default SupportAgreementForm;
