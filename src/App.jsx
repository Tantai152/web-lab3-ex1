import { DeveloperCard } from './components/DeveloperCard.jsx';

export default function App() {
  return (
    <main>
      <h1>Pro-Gamer Profile</h1>
      <DeveloperCard
        fullName="Nguyen Van A"
        role="Frontend Engineer • UIT S3T"
        avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240"
        metrics={{ commits: 1024, vdomNodes: 0, a11yScore: 100 }}
        skills={[
          { id: 'sk-1', name: 'React 19 Fiber', tier: 'Core' },
          { id: 'sk-2', name: 'WCAG 2.2 AA', tier: 'Core' },
          { id: 'sk-3', name: 'Vite', tier: 'Awareness' },
        ]}
      />
    </main>
  );
}
