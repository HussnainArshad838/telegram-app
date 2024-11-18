'use client';
import { Section, Cell, Image, List, Text, Button, Progress } from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link';
import { Page } from '@/components/Page';
import tonSvg from './_assets/ton.svg';
import { useTonWallet } from '@tonconnect/ui-react';
import { TonConnectButton } from '@tonconnect/ui-react';

export default function Home() {
  const wallet = useTonWallet();
  
  // Mock data - replace with real data later
  const stats = {
    tvl: '125,000',
    apy: '12.5',
    stakers: '1,245',
    progress: 65
  };

  return (
    <Page back={false}>
      <List>
        {/* Hero Section with Centered Wallet */}
        <Section>
          <div className="hero-container" style={{ 
            padding: '32px 16px',
            textAlign: 'center',
            background: 'var(--tg-theme-secondary-bg-color)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>
            <Image
              src={tonSvg.src}
              style={{ 
                backgroundColor: '#007AFF',
                width: '88px',
                height: '88px',
                borderRadius: '22px',
                marginBottom: '8px'
              }}
            />
            <div style={{ marginBottom: '24px' }}>
              <Text style={{ 
                fontSize: '32px', 
                fontWeight: 'bold',
                marginBottom: '12px',
                display: 'block'
              }}>
                Liquid Staking
              </Text>
              <Text style={{ 
                color: 'var(--tg-theme-hint-color)',
                fontSize: '16px',
                display: 'block'
              }}>
                Stake TON, Earn {stats.apy}% APY
              </Text>
            </div>

            <div style={{ 
              width: '100%',
              maxWidth: '280px',
              margin: '0 auto'
            }}>
              {!wallet ? (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <TonConnectButton />
                  <Text style={{ 
                    color: 'var(--tg-theme-hint-color)',
                    fontSize: '14px',
                    marginTop: '8px'
                  }}>
                    Connect wallet to start earning
                  </Text>
                </div>
              ) : (
                <Link href="/liquid-staking" style={{ textDecoration: 'none' }}>
                  <Button size="l" stretched>
                    Start Staking
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Section>

        {/* Stats Grid */}
        <Section>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            padding: '0 16px',
            marginTop: '8px'
          }}>
            <div style={{ 
              background: 'var(--tg-theme-secondary-bg-color)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <Text style={{ color: 'var(--tg-theme-hint-color)', marginBottom: '8px' }}>
                Total Value Locked
              </Text>
              <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {stats.tvl} TON
              </Text>
            </div>
            <div style={{ 
              background: 'var(--tg-theme-secondary-bg-color)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <Text style={{ color: 'var(--tg-theme-hint-color)', marginBottom: '8px' }}>
                Active Stakers
              </Text>
              <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {stats.stakers}
              </Text>
            </div>
          </div>
        </Section>

        {/* Next Reward Progress */}
        <Section header="Next Reward">
          <div style={{ padding: '0 16px' }}>
            <div style={{ 
              background: 'var(--tg-theme-secondary-bg-color)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                <Text style={{ color: 'var(--tg-theme-hint-color)' }}>
                  Progress
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                  {stats.progress}%
                </Text>
              </div>
              <Progress value={stats.progress} />
            </div>
          </div>
        </Section>

        {/* Features */}
        <Section header="Why Liquid Stake?">
          <Cell
            before={
              <div style={{ 
                backgroundColor: '#007AFF',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                ↗
              </div>
            }
            subtitle="Earn competitive APY while keeping your TON liquid"
          >
            Earn & Trade
          </Cell>
          <Cell
            before={
              <div style={{ 
                backgroundColor: '#28A745',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                🛡️
              </div>
            }
            subtitle="Audited smart contracts and secure infrastructure"
          >
            Security First
          </Cell>
          <Cell
            before={
              <div style={{ 
                backgroundColor: '#6C757D',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                ⚡
              </div>
            }
            subtitle="No minimum stake amount, start earning immediately"
          >
            Zero Barriers
          </Cell>
        </Section>
      </List>
    </Page>
  );
}