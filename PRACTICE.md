# 📚 คู่มือฝึก Git — Todo App

## โครงสร้าง Branch
```
feature/xxx → mvp → develop → uat → preprod → prod
```

---

## 🏋️ แบบฝึกหัด (ทำตามลำดับ)

### Exercise 1 — สร้าง feature branch ใหม่
```bash
git checkout mvp
git pull   # (ถ้ามี remote)
git checkout -b feature/mvp-delete-todo
```
งาน: เพิ่มฟังก์ชัน `remove(id)` ใน src/todoService.js

### Exercise 2 — commit แบบถูกต้อง
```bash
git add src/todoService.js
git commit -m "feat: เพิ่มฟังก์ชัน remove todo"
```
ลองดู commit message format:
- feat:   เพิ่ม feature ใหม่
- fix:    แก้ bug
- docs:   แก้ documentation
- refactor: ปรับ code โดยไม่เปลี่ยน behavior

### Exercise 3 — merge feature → mvp (จำลอง PR)
```bash
git checkout mvp
git merge feature/mvp-delete-todo --no-ff -m "merge PR: feature/mvp-delete-todo → mvp"
git branch -d feature/mvp-delete-todo
```

### Exercise 4 — ดู history แบบ tree
```bash
git log --oneline --graph --all --decorate
```

### Exercise 5 — promote ขึ้น develop
```bash
git checkout develop
git merge mvp --no-ff -m "merge: mvp → develop"
```

### Exercise 6 — ทำ merge conflict (ท้าทาย!)
```bash
# terminal 1: แก้ไขบน mvp
git checkout mvp
# แก้ src/todoService.js บรรทัดใดบรรทัดหนึ่ง

# terminal 2: แก้ไขบน develop บรรทัดเดียวกัน
git checkout develop
# แก้ src/todoService.js บรรทัดเดียวกัน

# จากนั้น merge แล้วดู conflict
git checkout develop
git merge mvp
# แก้ conflict → git add → git commit
```

### Exercise 7 — promote จนถึง prod + tag
```bash
git checkout uat     && git merge develop --no-ff -m "promote: develop → uat"
git checkout preprod && git merge uat --no-ff -m "promote: uat → preprod"
git checkout prod    && git merge preprod --no-ff -m "promote: preprod → prod"
git tag v0.2.0 -m "release v0.2.0"
git log --oneline --graph --all
```

---

## 📁 โครงสร้างไฟล์
```
todo-app/
├── src/
│   ├── index.js        ← entry point (ทดสอบรัน)
│   └── todoService.js  ← business logic (แก้ที่นี่)
├── package.json
├── .gitignore
├── README.md
└── PRACTICE.md         ← ไฟล์นี้
```

## ✅ Checklist
- [ ] Exercise 1: สร้าง feature branch
- [ ] Exercise 2: commit ถูก format
- [ ] Exercise 3: merge → mvp
- [ ] Exercise 4: ดู git tree
- [ ] Exercise 5: promote → develop
- [ ] Exercise 6: แก้ merge conflict
- [ ] Exercise 7: promote → prod + tag
