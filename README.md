# Frontend - Account Creation Flow

A clean, user-friendly React application that guides users through account creation with a multi-step form. Built with modern tools and best practices for a smooth onboarding experience.

## 🎯 What This App Does

Users go through 5 simple steps to create their account:
1. Choose account type (Personal or Business)
2. Enter their phone number
3. Verify with OTP code
4. Enter their name
5. Set a password

After completing all steps, they see a success screen with account summary.

## 🏗️ How It's Organized

```
src/
├── components/
│   ├── core/           ← Basic UI components (Button, Input) used everywhere
│   └── login/          ← Account creation flow components
├── pages/login/        ← Main page that puts everything together
├── routes/             ← Navigation setup
└── styles/             ← Global styling
```

### Component Breakdown

**Core Components** - These are like building blocks used throughout the app:
- **Button** - All buttons across the app use this component
- **Input** - All text inputs use this component

**Step Components** - Each step of the form has its own component:
- AccountTypeSelection - Pick Personal or Business
- SetUserPhoneNumber - Enter phone with country code
- UserOTPVerification - Enter 4-digit code from SMS
- SetUserName - Enter first and last name
- SetUserPassword - Create password

**Layout Components**:
- OnboardingLayout - The container that holds everything
- StepNavigation - Back and Continue buttons
- SuccessModal - Shows success message at the end

## 🧠 Architecture Decisions

### Why This Structure?

**Separate Core Components**
- We use the same Button and Input everywhere
- If we change how buttons look, it updates everywhere automatically
- No code duplication

**One Component Per Step**
- Each step is independent and doesn't affect others
- Easy to modify one step without breaking the rest
- Each component only knows about its own form fields
- Makes it simple to add, remove, or reorder steps

**One Parent to Manage Everything**
- The LoginFlow component (in pages/login/) keeps track of:
  - Which step we're on
  - What data the user entered
  - When to show the success message
- Each step component receives data and sends updates back to the parent
- Clean and clear data flow

### Why These Technology Choices?

**React + TypeScript** - Type safety helps catch bugs early

**Tailwind CSS** - Fast styling with utility classes, makes responsive design easy

**Vite** - Lightning fast development and build tool

**Framer Motion** - Smooth animations (progress bar, success modal)

**No Redux/Complex State** - For this app, simple React hooks are perfect. If it grows bigger, we can add more advanced state management later.

## 🎨 Styling

Most styling uses Tailwind CSS utility classes. For the custom OTP boxes, we have a dedicated SCSS file that handles the specific styling (colors, sizing, animations).

## 📱 Features

✅ **Mobile-First Design** - Works great on phones, tablets, and desktops

✅ **Form Validation** - Each step validates before moving forward with helpful error messages

✅ **Progress Indicator** - Visual progress bar shows how far through the flow you are

✅ **Smooth Animations** - Transitions between steps feel polished

✅ **Accessible** - Proper form labels, error messages, and keyboard support

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens at http://localhost:3000

### Build for Production
```bash
npm run build
```

### Check Code Quality
```bash
npm run lint
```

## 📦 What's Included

- React 19 - Modern React with latest features
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first styling
- Vite - Super fast build tool
- Framer Motion - Animation library
- React Router - Navigation
- Lucide Icons - Beautiful icons

## 🔄 How Data Flows

```
User enters data in a form field
        ↓
Component calls onChange with new data
        ↓
Parent component updates and stores the data
        ↓
Data gets passed back down to components
        ↓
User sees their data reflected in the form
```

Simple and predictable - one direction most of the time.

## 🔮 What Could Come Next

If we wanted to make this bigger:
- **Connect to a Backend** - Actually save accounts to a database
- **Better Error Messages** - Show specific validation errors
- **Remember Progress** - Save form data if user leaves and comes back
- **More Account Types** - Add more options beyond Personal/Business
- **Advanced Validation** - More sophisticated phone/password validation
- **Analytics** - Track where users drop off in the flow

## 🧪 Testing

Currently there are no tests, but it would be easy to add them since each component is independent and testable.

## 👥 Team Notes

**For New Developers:**
- Start by looking at `/src/pages/login/index.tsx` to understand the flow
- Then check out individual step components to see how they work
- Core components in `/src/components/core/` are simple and show how reusable components are built

**When Adding a New Step:**
1. Create a new component file
2. Add it to the step components list
3. Update the total step count
4. Add the validation logic
5. Wire it into the main flow - that's it!

**When Changing Styling:**
- Global changes? Update Tailwind in `src/styles/index.css`
- Component-specific? Update the component's class names
- Complex styling? Add SCSS file like `UserOTPVerification.scss`

## 📝 File Structure

```
src/
├── components/
│   ├── core/
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   └── styles.scss
│   │   └── Input/
│   │       └── index.tsx
│   └── login/
│       ├── AccountTypeSelection.tsx
│       ├── OnboardingLayout.tsx
│       ├── SetUserName.tsx
│       ├── SetUserPassword.tsx
│       ├── SetUserPhoneNumber.tsx
│       ├── StepNavigation.tsx
│       ├── SuccessModal.tsx
│       ├── UserOTPVerification.tsx
│       └── UserOTPVerification.scss
├── pages/
│   ├── login/
│   │   └── index.tsx (Main orchestrator)
│   └── pageNotFound.tsx
├── routes/
│   └── index.tsx
├── styles/
│   └── index.css
├── assets/
├── App.tsx
└── main.tsx
```

## 🤝 Contributing

The codebase is organized to make changes easy:
- Keep each component focused on one thing
- Use the existing patterns (how buttons and inputs work)
- Add validation in the step component itself
- Keep styling with the component (Tailwind classes or SCSS)
