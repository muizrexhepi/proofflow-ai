import * as React from "react";

interface WaitlistWelcomeEmailProps {
  email: string;
}

export const WaitlistWelcomeEmail: React.FC<WaitlistWelcomeEmailProps> = ({
  email,
}) => (
  <html>
    <head>
      <style>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          padding: 40px 0;
          background: linear-gradient(to right, #3b82f6, #1e40af);
          color: white;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background: #ffffff;
          padding: 40px;
          border: 1px solid #e5e7eb;
          border-top: none;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #6b7280;
          font-size: 14px;
        }
        .button {
display: inline-block;
          padding: 12px 24px;
          background-color: #3b82f6;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          margin: 20px 0;
        }
        .highlight {
          background-color: #eff6ff;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
      `}</style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1>Welcome to ProofFlow.ai! 🎉</h1>
        </div>
        <div className="content">
          <p>Hi there,</p>

          <p>
            Thanks for joining the ProofFlow.ai waitlist! You're now part of an
            exclusive group that will get early access to our AI-powered case
            study generator.
          </p>

          <div className="highlight">
            <h3>What happens next?</h3>
            <ul>
              <li>
                We're building in public, so you'll get regular updates on our
                progress
              </li>
              <li>
                You'll be among the first to try ProofFlow.ai when we launch
              </li>
              <li>We'll share exclusive insights and early-bird pricing</li>
            </ul>
          </div>

          <p>
            <strong>Want to stay even more connected?</strong>
            <br />
            Follow our journey on X (Twitter) where I share daily updates,
            challenges, and lessons learned while building ProofFlow.ai.
          </p>

          <center>
            <a href="https://twitter.com/muiz_rexhepi" className="button">
              Follow on X
            </a>
          </center>

          <p>
            Have questions or feedback? Just reply to this email—I read every
            message!
          </p>

          <p>
            Thanks for believing in what we're building,
            <br />
            <strong>The ProofFlow.ai Team</strong>
          </p>
        </div>
        <div className="footer">
          <p>
            You received this email because you signed up for the ProofFlow.ai
            waitlist with {email}.
          </p>
          <p>&copy; 2025 ProofFlow.ai. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
);
