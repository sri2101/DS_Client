// import React from 'react'
// import { AppWindowIcon, CodeIcon } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

// function Auth() {
//   return (
//     <div className='h-screen w-full flex items-center justify-center flex-col'>
//     <div className="flex max-w-sm w-96 flex-col gap-6">
//       <Tabs defaultValue="login">
//         <TabsList className={"w-auto"}>
//           <TabsTrigger value="login" className={"cursor-pointer"}>Login</TabsTrigger>
//           <TabsTrigger value="signup" className={"cursor-pointer"}>Signup</TabsTrigger>
//         </TabsList>
//         <TabsContent value="login">
//           <Card>
//             <CardHeader>
//               <CardTitle>Login into your account</CardTitle>
//               <CardDescription>
//                 Enter your email id & password for login operation.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="grid gap-6">
//               <div className="grid gap-3">
//                 <Label htmlFor="tabs-demo-name">E-Mail</Label>
//                 <Input id="tabs-demo-name" placeholder="example@gmail.com" type={"mail"}/>
//               </div>
//               <div className="grid gap-3">
//                 <Label htmlFor="tabs-demo-username">Password</Label>
//                 <Input id="tabs-demo-username" placeholder="Enter your password" type={"password"}/>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button className={"w-full"}>Login</Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//         <TabsContent value="signup">
//           <Card>
//             <CardHeader>
//               <CardTitle>Signup for new account</CardTitle>
//               <CardDescription>
//                 Change your password here. After saving, you&apos;ll be logged
//                 out.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="grid gap-6">
//               <div className="grid gap-3">
//                 <Label htmlFor="tabs-demo-current">Fullname</Label>
//                 <Input id="tabs-demo-current" type="text" placeholder="Dare Devil"/>
//               </div>
//               <div className="grid gap-3">
//                 <Label htmlFor="tabs-demo-new">E-Mail</Label>
//                 <Input id="tabs-demo-new" type="mail" placeholder="example@gmail.com"/>
//               </div>
//               <div className="grid gap-3">
//                 <Label htmlFor="tabs-demo-new">Phone No</Label>
//                 <Input id="tabs-demo-new" type="text" placeholder="9876543210"/>
//               </div>
//               <div className="grid gap-3">
//                 <Label htmlFor="tabs-demo-new">Password</Label>
//                 <Input id="tabs-demo-new" type="password" placeholder="Enter your password"/>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button className={"w-full"}>Signup</Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//     </div>
//   )
// }

// export default Auth



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setUser } from '@/app/features/userSlice';
// import { AppWindowIcon, CodeIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";

// function Auth() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginLoading, setLoginLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) return;

//     try {
//       setLoginLoading(true);
//       const res = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         // Store user in Redux
//         dispatch(setUser(data.user));
//         // Save JWT token to localStorage
//         localStorage.setItem('token', data.token);

//         // Redirect based on role
//         if (data.user.type === 'ADMIN') {
//           navigate('/admin/hotels'); // your HotelAdmin page
//         } else {
//           navigate('/'); // normal user goes home
//         }
//       } else {
//         alert(data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Something went wrong');
//     } finally {
//       setLoginLoading(false);
//     }
//   };

//   return (
//     <div className='h-screen w-full flex items-center justify-center flex-col'>
//       <div className="flex max-w-sm w-96 flex-col gap-6">
//         <Tabs defaultValue="login">
//           <TabsList className={"w-auto"}>
//             <TabsTrigger value="login" className={"cursor-pointer"}>Login</TabsTrigger>
//             <TabsTrigger value="signup" className={"cursor-pointer"}>Signup</TabsTrigger>
//           </TabsList>

//           {/* Login Tab */}
//           <TabsContent value="login">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Login into your account</CardTitle>
//                 <CardDescription>
//                   Enter your email id & password for login operation.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-6">
//                 <div className="grid gap-3">
//                   <Label htmlFor="login-email">E-Mail</Label>
//                   <Input
//                     id="login-email"
//                     type="email"
//                     placeholder="example@gmail.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="login-password">Password</Label>
//                   <Input
//                     id="login-password"
//                     type="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button
//                   className={"w-full"}
//                   onClick={handleLogin}
//                   disabled={loginLoading}
//                 >
//                   {loginLoading ? 'Logging in...' : 'Login'}
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           {/* Signup Tab */}
//           <TabsContent value="signup">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Signup for new account</CardTitle>
//                 <CardDescription>
//                   Change your password here. After saving, you&apos;ll be logged
//                   out.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-6">
//                 <div className="grid gap-3">
//                   <Label htmlFor="signup-fullname">Fullname</Label>
//                   <Input id="signup-fullname" type="text" placeholder="Dare Devil"/>
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="signup-email">E-Mail</Label>
//                   <Input id="signup-email" type="email" placeholder="example@gmail.com"/>
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="signup-phone">Phone No</Label>
//                   <Input id="signup-phone" type="text" placeholder="9876543210"/>
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="signup-password">Password</Label>
//                   <Input id="signup-password" type="password" placeholder="Enter your password"/>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button className={"w-full"}>Signup</Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }

// export default Auth;






import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '@/app/features/userSlice';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // --- Login State ---
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // --- Signup State ---
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupLoading, setSignupLoading] = useState(false);

  // --- Active Tab ---
  const [activeTab, setActiveTab] = useState('login');

  // --- Login Handler ---
  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) return;

    try {
      setLoginLoading(true);
      const res = await fetch('/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // server expects field name 'id' (email or phone)
        body: JSON.stringify({ id: loginEmail, password: loginPassword }),
      });
      const raw = await res.text();
      // Debug: log HTTP status, content-type and raw response body
      console.log('login response status:', res.status);
      try {
        console.log('login response content-type:', res.headers.get('content-type'));
      } catch (e) {
        console.warn('could not read response headers', e);
      }
      console.log('login raw response body:', raw);

      // some responses may be empty; guard parsing
      let data = {};
      try { data = raw ? JSON.parse(raw) : {} } catch (e) { console.error('Invalid JSON', raw); }

      if (res.ok) {
        // ResponseHandler stores payload under `data`
        const payload = data?.data || {};
        const user = payload.user || {};
        // Store user in Redux and persist (if present)
        if (payload.token) localStorage.setItem('token', payload.token);
        if (user && Object.keys(user).length > 0) {
          dispatch(setUser(user));
        } else if (payload.token) {
          // fallback: fetch profile using token to get user info
          try {
            const profileRes = await fetch('/api/v1/user/profile', {
              headers: { Authorization: `Bearer ${payload.token}` },
            });
            if (profileRes.ok) {
              const profileJson = await profileRes.json();
              const profileUser = profileJson?.data || profileJson || {};
              console.log('fetched profile after login:', profileUser);
              dispatch(setUser(profileUser));
            }
          } catch (e) {
            console.error('profile fetch after login failed', e);
          }
        }

        // Debug log
        console.log('login success, user:', user);
        if (!user || Object.keys(user).length === 0) {
          console.warn('login: server returned empty user object');
        }

        // Explicit role logs
        if (user && user.type === 'ADMIN') {
          console.log('login role: ADMIN');
        } else if (user && user.type === 'USER') {
          console.log('login role: USER');
        } else {
          console.log('login role: unknown (no type provided)');
        }

        // Redirect based on role (use replace to prevent back-nav to login)
        const target = (user && user.type === 'ADMIN') ? '/admin/hotels' : '/';
        console.log('navigating to', target);
        try {
          navigate(target, { replace: true });
        } catch (e) {
          console.warn('navigate threw', e);
        }
        // Fallback: if router navigation doesn't update location (sometimes dev/proxy or router mismatch), force a reload to the target
        setTimeout(() => {
          if (window.location.pathname === '/auth' || window.location.pathname === '/auth/') {
            console.warn('router navigation did not change location, falling back to window.location');
            window.location.href = target;
          }
        }, 150);
      } else {
        alert((data && data.message) || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    } finally {
      setLoginLoading(false);
    }
  };

  // --- Signup Handler ---
  const handleSignup = async () => {
    if (!signupName || !signupEmail || !signupPhone || !signupPassword) return;

    try {
      setSignupLoading(true);
      const res = await fetch('/api/v1/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: signupName,
          email: signupEmail,
          phone: signupPhone,
          password: signupPassword
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Signup successful! Please login.');
        // Switch to login tab
        setActiveTab('login');
        // Clear signup fields
        setSignupName('');
        setSignupEmail('');
        setSignupPhone('');
        setSignupPassword('');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
      <div className="flex max-w-sm w-96 flex-col gap-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className={"w-auto"}>
            <TabsTrigger value="login" className={"cursor-pointer"}>Login</TabsTrigger>
            <TabsTrigger value="signup" className={"cursor-pointer"}>Signup</TabsTrigger>
          </TabsList>

          {/* --- Login Tab --- */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login into your account</CardTitle>
                <CardDescription>
                  Enter your email & password.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="login-email">E-Mail</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className={"w-full"}
                  onClick={handleLogin}
                  disabled={loginLoading}
                >
                  {loginLoading ? 'Logging in...' : 'Login'}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* --- Signup Tab --- */}
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Signup for new account</CardTitle>
                <CardDescription>
                  Fill all fields to create a new account.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="signup-fullname">Fullname</Label>
                  <Input
                    id="signup-fullname"
                    type="text"
                    placeholder="John Doe"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="signup-email">E-Mail</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="signup-phone">Phone No</Label>
                  <Input
                    id="signup-phone"
                    type="text"
                    placeholder="9876543210"
                    value={signupPhone}
                    onChange={(e) => setSignupPhone(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Enter your password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className={"w-full"}
                  onClick={handleSignup}
                  disabled={signupLoading}
                >
                  {signupLoading ? 'Signing up...' : 'Signup'}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  )
}

export default Auth;
