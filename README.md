# Blazor WebAssembly Project

Welcome to the **BlazorWebsite** project! This guide will help you set up, run, and contribute to the project.

---

## 🚀 Prerequisites

Before running the project, ensure you have the following installed:

- [**.NET 9 SDK**](https://dotnet.microsoft.com/download/dotnet/9.0)
- A modern web browser (Edge, Chrome, Firefox, etc.)
- (Optional) [Visual Studio 2022](https://visualstudio.microsoft.com/) with Blazor WebAssembly support **OR** VS Code with the C# extension

To verify your .NET installation, run:

```sh
    dotnet --version
```

Expected output:

```
9.x.x
```

---

## 📥 Clone the Repository

Clone this repository to your local machine using Git:

```sh
git clone https://github.com/Grantsirian/BlazorWebsite.git
cd BlazorWebsite
```

---

## 🛠️ Build & Run the Project

### **1️⃣ Restore Dependencies**

Run the following command to install required dependencies:

```sh
dotnet restore
```

### **2️⃣ Build the Project**

```sh
dotnet build
```

### **3️⃣ Run the Application**

Start the Blazor WebAssembly app with:

```sh
dotnet run
```

This will provide a local development URL, typically:

```
http://localhost:5000
```

Open this URL in your browser to see the application in action.

---

## 🏗️ Deployment

To publish the Blazor WebAssembly app for deployment:

```sh
dotnet publish -c Release -o publish
```

This generates the production-ready files in the `publish` folder.

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork** the repository.
2. Create a **new branch** for your changes.
3. Commit your changes and push them to your fork.
4. Open a **pull request**.

---

## 🛠 Troubleshooting

- **Issue:** `dotnet: command not found`
  - Solution: Ensure the .NET 9 SDK is installed and added to your system path.
- **Issue:** `Could not find a part of the path 'wwwroot/_framework'`
  - Solution: Run `dotnet clean && dotnet build`.

---

## 📧 Contact

For questions or issues, open an [issue](https://github.com/Grantsirian/BlazorWebsite/issues) or reach out at `grantsirian@gmail.com`.

