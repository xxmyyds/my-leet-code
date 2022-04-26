export function deleteNode(node: any) {
  node.val = node.next.val
  node.next = node.next.next
}
