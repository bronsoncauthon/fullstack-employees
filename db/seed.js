import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 10; i++) {
    await createEmployee({
      name: "Employee #" + i,
      birthday: "2222-02-22",
      salary: "100000",
    });
  }
}
