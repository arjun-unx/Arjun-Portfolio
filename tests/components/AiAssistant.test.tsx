import { describe, it, expect, vi, Mock } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AiAssistant } from '@/components/sections/AiAssistant';

// Mock fetch for the API route
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ response: "Mocked API Response" }),
  })
) as Mock;

describe('AiAssistant', () => {
  it('renders initial bot greeting', () => {
    render(<AiAssistant />);
    expect(screen.getByText(/Ask me anything about his architecture decisions/i)).toBeInTheDocument();
  });

  it('sends message when send button clicked', async () => {
    render(<AiAssistant />);
    const input = screen.getByPlaceholderText('Ask about my systems experience...');
    fireEvent.change(input, { target: { value: 'performance improvements' } });
    
    const sendBtn = screen.getByRole('button', { name: "Send message" });
    fireEvent.click(sendBtn);
    
    expect(screen.getByText('performance improvements')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('Mocked API Response')).toBeInTheDocument();
    });
  });

  it('disables input and send button while loading', () => {
    render(<AiAssistant />);
    const input = screen.getByPlaceholderText('Ask about my systems experience...');
    const sendBtn = screen.getByRole('button', { name: "Send message" });
    
    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(sendBtn);
    
    expect(input).toBeDisabled();
    expect(sendBtn).toBeDisabled();
  });

  it('does not show duplicate messages on rapid Enter presses', () => {
    render(<AiAssistant />);
    const input = screen.getByPlaceholderText('Ask about my systems experience...');
    
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    // After first Enter, input is disabled — second Enter should be a no-op
    fireEvent.keyDown(input, { key: 'Enter' });
    
    const userMessages = screen.getAllByText('hello');
    expect(userMessages).toHaveLength(1);
  });

  it('shows suggestion chips', () => {
    render(<AiAssistant />);
    expect(screen.getByText("What is Arjun's experience with AI Agents and RAG?")).toBeInTheDocument();
    expect(screen.getByText("How did he reduce API latency from 400ms to 120ms?")).toBeInTheDocument();
  });
});
