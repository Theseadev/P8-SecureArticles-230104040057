# SecureArticles API

Sebuah backend API sederhana untuk mengelola artikel dengan autentikasi
berbasis JWT. Digunakan sebagai tugas **Praktikum 8**.

## 🔍 Fitur

-   Registrasi dan login user
-   Autentikasi menggunakan **Access Token** (JWT)
-   Refresh token agar sesi tetap aman
-   CRUD artikel (Create, Read, Update, Delete)
-   Proteksi rute artikel hanya untuk user yang sudah login
-   Role-based access
-   Menyimpan tag untuk tiap artikel
-   Status artikel (draft/published)

## 📦 Teknologi

-   Node.js & Express
-   JWT
-   MongoDB + Mongoose
-   dotenv

## 🚀 Instalasi

``` bash
git clone https://github.com/Theseadev/P8-SecureArticles-230104040057.git
cd P8-SecureArticles-230104040057
npm install
```

Buat file `.env`:

    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    ACCESS_TOKEN_SECRET=your_jwt_secret
    REFRESH_TOKEN_SECRET=your_refresh_jwt_secret

Jalankan server:

``` bash
npm start
# atau
npm run dev
```

## 📌 Tabel Endpoint Project Praktikum #8
🔐 AUTH ENDPOINTS

 | Method | Endpoint             | Auth            | Deskripsi                                |
| ------ | -------------------- | --------------- | ---------------------------------------- |
| POST   | `/api/auth/register` | ❌ Public        | Register user baru (role: user/admin)    |
| POST   | `/api/auth/login`    | ❌ Public        | Login → dapat accessToken + refreshToken |
| POST   | `/api/auth/refresh`  | ❌ Public        | Minta accessToken baru via refreshToken  |
| POST   | `/api/auth/logout`   | ✔️ Access Token | Logout & invalidate refreshToken         |
| GET    | `/api/auth/me`       | ✔️ Access Token | Ambil profil user dari JWT               |

📰 ARTICLES ENDPOINTS (CRUD + RBAC)
| Method | Endpoint            | Auth            | Role        | Deskripsi                                 |
| ------ | ------------------- | --------------- | ----------- | ----------------------------------------- |
| GET    | `/api/articles`     | ❌ Public        | public      | List all articles + pagination + search   |
| POST   | `/api/articles`     | ✔️ Access Token | user/admin  | Create article (author otomatis dari JWT) |
| PUT    | `/api/articles/:id` | ✔️ Access Token | owner/admin | Update article                            |
| DELETE | `/api/articles/:id` | ✔️ Access Token | admin       | Hapus article                             |

⚙️ SYSTEM / OBSERVABILITY
| Method | Endpoint  | Auth     | Deskripsi                          |
| ------ | --------- | -------- | ---------------------------------- |
| GET    | `/health` | ❌ Public | Cek status server                  |
| GET    | `/docs`   | ❌ Public | Swagger UI (OpenAPI Documentation) |


## 🧪 Testing dengan Postman

### Login

``` json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Refresh Token

``` json
{
  "refreshToken": "<REFRESH_TOKEN>"
}
```

### Buat Artikel

``` json
{
  "title": "Judul Artikel",
  "content": "Isi konten artikel.",
  "tags": ["tag1", "tag2"],
  "status": "published"
}
```

## 📝 Lisensi

Proyek dapat menggunakan lisensi MIT atau sesuai kebutuhan.
